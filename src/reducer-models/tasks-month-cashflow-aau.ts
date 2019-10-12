
import { State, Model, TasksMonthCashFlowAAU } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as TasksMonthCashFlowAAU["Row"];
  const PK = { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Tasks-Month-CashFlow-AAU"]: {
        ...state.Source["Tasks-Month-CashFlow-AAU"],
        Rows: state.Source["Tasks-Month-CashFlow-AAU"].Rows
          .map((row): TasksMonthCashFlowAAU["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as TasksMonthCashFlowAAU["Row"];
  const PK = { Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Tasks-Month-CashFlow-AAU"]: {
        ...state.Source["Tasks-Month-CashFlow-AAU"],
        Rows: state.Source["Tasks-Month-CashFlow-AAU"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
