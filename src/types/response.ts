import { State, PK, Row } from './state';

interface ResponseSelect {
  Method: 'Select';
  Context: {
    Source: keyof State['Source'];
  };
  Result: Row[];
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

export type Response = ResponseSelect | Notificate;
export type ResponseHandler = (response: Response) => void;
