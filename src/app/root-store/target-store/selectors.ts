import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';
  
  import { Target } from '../../Models';
  
  import { State } from './state';
import { Dictionary } from '@ngrx/entity';
  
const getEntities = (state: State): Dictionary<Target> => state.entities;

const getCurrentID = (state: State): number => state.ids.length - 1;
  
const getCurrentTarget = (state: State): Target => state.entities[state.ids.length - 1];
  

  
  export const selectTargetState: MemoizedSelector<
    object,
    State
  > = createFeatureSelector<State>('target');
  
  export const selectCurrentID = createSelector(selectTargetState, getCurrentID);
  
  export const selectCurrentTarget: MemoizedSelector<
    object,
    Target
  > = createSelector(selectTargetState, getCurrentTarget);
  
  export const selectEntities = createSelector(selectTargetState, getEntities);



export const selectAllTarget = createSelector(
  selectTargetState,
    coursesState => {
        const allCourses = Object.values(coursesState.entities)
        return allCourses;
    }
);