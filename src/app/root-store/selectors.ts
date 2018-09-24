import { createSelector, MemoizedSelector } from '@ngrx/store';
import { TargetStoreSelectors } from './target-store';
import { Target } from '../models';


export const selectCurrentID: MemoizedSelector<object, number> = createSelector(
    TargetStoreSelectors.selectCurrentID,
    (currentId: number) => {
      return currentId;
    }
  );

