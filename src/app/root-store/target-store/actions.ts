import { Action } from '@ngrx/store';
import { Target } from '../../models';
import { Update } from '@ngrx/entity';

export enum ActionTypes {
  ADD = '[Target] Add',
  UPDATE = '[Target] Update',
  REMOVE = '[Target] Remove',
  LOAD = '[Target] Load'
}

export class AddAction implements Action {
  readonly type = ActionTypes.ADD;
  constructor(public payload: { target: Target}){}
}

export class UpdateAction implements Action {
  readonly type = ActionTypes.UPDATE;
  constructor(public payload: { target: Update<Target>}){}
}

export class RemoveAction implements Action {
  readonly type = ActionTypes.REMOVE;
  constructor(public payload: { id: number }) {}
}

export class LoadAction implements Action {
  readonly type = ActionTypes.LOAD;
  constructor(public payload: { items: Target[] }) {}
}

export type Actions = AddAction | RemoveAction | LoadAction | UpdateAction;