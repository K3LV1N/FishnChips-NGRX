import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';

import * as fromFishnChips from '../fishnchips/store/fishnchips.reducer';

export interface AppState {
  fishnchips: fromFishnChips.State;
}

export const reducers: ActionReducerMap<AppState> = {
  fishnchips: fromFishnChips.FishnChipsReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
