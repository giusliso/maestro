import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Target } from '../../models';

export const adapter: EntityAdapter<Target> = createEntityAdapter<Target>(); 
export interface State extends EntityState<Target>{

}

export const initialState : State = adapter.getInitialState({

});
