import { Actions, ActionTypes } from './actions';
import { initialState, State, adapter } from './state';
import { Action } from 'rxjs/internal/scheduler/Action';

export function featureReducer( state = initialState, actions:Actions): State{
    switch(actions.type){
        case ActionTypes.ADD:
        return adapter.addOne(actions.payload.target, {
            ...state,
            entities: {
                ...state.entities
             }
        });

        case ActionTypes.UPDATE:
        return adapter.updateOne(actions.payload.target, state);

        case ActionTypes.REMOVE:
        return adapter.removeOne(actions.payload.id, state); 

        case ActionTypes.LOAD:
        return adapter.addAll(actions.payload.items, state); 
    }
} 