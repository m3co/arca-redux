
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

export type ActionsArca = ActionStatus | ActionSelect<AAURow>;

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

export interface AAUResponseSubscribeUnsubscribe {
    Context: {
        Target: 'AAU'
    } | {
        Source: 'AAU'
    },
    ID: string,
    Method: 'Subscribe' | 'Unsubscribe',
    Result: 'Success'
}

export interface AAUResponseSelect {
    Context: {
        Target: 'AAU'
    } | {
        Source: 'AAU'
    },
    ID: string,
    Method: 'Select',
    Result: AAURow[]
}

export type AAUResponse = AAUResponseSubscribeUnsubscribe | AAUResponseSelect
