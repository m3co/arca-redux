import { State, PK, Row } from './state';

interface ResponseSubscribe {
  ID: string;
  Method: 'Subscribe';
  Context: {
    Target: keyof State['Source'];
  };
  Result: 'Success';
}

interface ResponseSelect {
  Method: 'Select';
  Context: {
    Source: keyof State['Source'];
  };
  Result: Row[];
}

interface ResponseRequest {
  Method: 'Insert' | 'Delete' | 'Update';
  ID: string;
  Context: {
    Source: keyof State['Source'];
  };
  Result: {
    Success: true; // Tal parece aqui hay que corregir, pues YA perdio sentido
    // es muy probable que aqui vaya Row: <Row>
  };
  Error: null;
}

interface Notificate {
  Method: 'insert' | 'delete' | 'update';
  Context: {
    Source: string;
    Target: keyof State['Source'];
    Notification: true;
  };
  Row: Row;
  PK?: PK
}

export type Response = ResponseSubscribe | ResponseRequest | ResponseSelect | Notificate;
export type ResponseHandler = (response: Response) => void;
