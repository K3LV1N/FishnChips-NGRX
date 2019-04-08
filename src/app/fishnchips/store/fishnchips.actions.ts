import { FishnChips } from './../models/fishnchipsorder.model';
import { Action } from '@ngrx/store';

export const CREATE = '[FishnChips] Create';
export const UPDATE = '[FishnChips] Update';
export const DELETE = '[FishnChips] Delete';

export class Create implements Action {
    readonly type = CREATE;
    constructor(public fishnchipsorder: FishnChips) { }
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: number,
        public changes: Partial<FishnChips>,
    ) {}
}
export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: number) {}
}

export type FishnChipsActions = Create | Update | Delete;
