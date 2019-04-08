import * as actions from './fishnchips.actions';
import { FishnChipsActions, Delete } from './fishnchips.actions';
import { FishnChips } from '../models/fishnchipsorder.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

// Establish Entity State and Entity Adapter for fishnchips interface
export const adapter = createEntityAdapter<FishnChips>();
export interface State extends EntityState<FishnChips> { }

// Get Initial Order state
export const initialState: State = adapter.getInitialState();

// Fish & Chips Order Reducer
export function FishnChipsReducer(
    state: State = initialState,
    action: FishnChipsActions
) {
   switch (action.type) {
        case actions.CREATE:
            return adapter.addOne(action.fishnchipsorder, state);
        case actions.UPDATE:
            return adapter.updateOne({ id: action.id, changes: action.changes }, state);
        case actions.DELETE:
            return adapter.removeOne(action.id, state);
        default:
            return state;
   }
}




