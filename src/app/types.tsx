
import { Action } from 'redux';

export interface ActionSelect<T> extends Action {
    type: 'Select';
    Context: {
        Source: string;
    };
    Result: T[];
}

export interface ActionStatus extends Action {
    type: 'Connect' | 'Disconnect'
}

export interface ResponseSubscribeUnsubscribe {
    Context: {
        Target: string
    } | {
        Source: string
    },
    ID: string,
    Method: 'Subscribe' | 'Unsubscribe',
    Result: 'Success'
}

export interface ResponseSelect<T> {
    Context: {
        Target: string
    } | {
        Source: string
    },
    ID: string,
    Method: 'Select',
    Result: T[]
}

export type ArcaActions = ActionStatus | ActionSelect<AAURow>;
export type ArcaResponses = ResponseSubscribeUnsubscribe | ResponseSelect<AAURow>

export interface ArcaState {
    Sources: {
        AAU: {
            Rows: AAURow[];
        };
    };
    active: boolean;
}

export const initialState: ArcaState = {
    Sources: {
        AAU: {
            Rows: []
        }
    },
    active: false
};

export interface AAURow {
    ID: string;
    Parent: string;
    Expand: boolean;
    Description: string;
    Unit: string;
    Price: number;
    P: number;
}

