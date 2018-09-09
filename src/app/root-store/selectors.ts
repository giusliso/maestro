import { createSelector, MemoizedSelector } from '@ngrx/store';
import { TargetStoreSelectors } from './target-store';
import { Target } from '../Models';


export const selectCurrentID: MemoizedSelector<object, number> = createSelector(
    TargetStoreSelectors.selectCurrentID,
    (currentId: number) => {
      return currentId;
    }
  );

