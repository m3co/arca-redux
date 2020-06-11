import { State, PK, Row, SearchResultItem } from './state';

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

interface ResponseSearch {
  Method: 'Search';
  Context: {
    Source: keyof State['Source'];
  };
  Result: SearchResultItem[];
}

export type Response = ResponseSelect | Notificate | ResponseSearch;
export type ResponseHandler = (response: Response) => void;
