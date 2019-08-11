
import { State, Model, TasksGanttAAU } from '../types';

export function Update(state: State, row: Model["Row"]): State {
  const Row = row as TasksGanttAAU["Row"];
  const PK = { Constraint: Row.Constraint, Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Tasks-Gantt-AAU"]: {
        ...state.Source["Tasks-Gantt-AAU"],
        Rows: state.Source["Tasks-Gantt-AAU"].Rows
          .map((row): TasksGanttAAU["Row"] =>
            (keys.every((key): boolean => PK[key] === row[key])) ? Row : row)
      }
    }
  };
}

export function Delete(state: State, row: Model["Row"]): State {
  const Row = row as TasksGanttAAU["Row"];
  const PK = { Constraint: Row.Constraint, Key: Row.Key };
  const keys = Object.keys(PK) as (keyof typeof PK)[];
  return {
    ...state,
    Source: {
      ...state.Source,
      ["Tasks-Gantt-AAU"]: {
        ...state.Source["Tasks-Gantt-AAU"],
        Rows: state.Source["Tasks-Gantt-AAU"].Rows.filter((row): boolean =>
          (keys.every((key): boolean => PK[key] === row[key])) ? false : true)
      }
    }
  };
}
