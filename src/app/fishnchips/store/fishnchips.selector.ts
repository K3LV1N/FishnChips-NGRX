import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, State } from './fishnchips.reducer';

export const getFishnChipsState = createFeatureSelector<State>('fishnchips');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adapter.getSelectors(getFishnChipsState);

export const selectItemById = (id) => createSelector(selectEntities, entities => entities[id]);
