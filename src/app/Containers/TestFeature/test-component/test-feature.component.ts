import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Target } from '../../../models';
import { Dictionary } from '@ngrx/entity';
import {
  RootStoreState,
  TargetStoreActions,
  TargetStoreSelectors
} from '../../../root-store/'

@Component({
  selector: 'app-test-component',
  templateUrl: './test-feature.component.html',
  styleUrls: ['./test-feature.component.scss']
})
export class TestComponent implements OnInit {
  allTargets$: Observable<Target[]>;
  target$:  Observable<Target>;
  target: Target;
  currentId:number;
  Id$:Observable<number>;
  constructor(
    private store$: Store<any>    
  ) {
    this.currentId = 0;
    this.target = null;
  
   }

  ngOnInit() {
    this.store$.dispatch(new TargetStoreActions.LoadAction({items :[]}));
    this.allTargets$ = this.store$.pipe(select(TargetStoreSelectors.selectAllTarget));
  }

  addTarget() {
    this.currentId = this.currentId  + 1;
		this.store$.dispatch(new TargetStoreActions.AddAction({ target: {
      id:this.currentId,
      name: "target" + this.currentId
    }
   }));   
  }

  updateTarget() {
    let updatedTarget = {
      id:this.currentId,
      name: "target Aggiornato"
    }
		this.store$.dispatch(new TargetStoreActions.UpdateAction({ target: { id: updatedTarget.id, changes:updatedTarget} }));   
  }
  
  removeTarget() {
    this.store$.dispatch(new TargetStoreActions.RemoveAction({ id: this.currentId }));
    this.currentId = this.currentId - 1;
	}
}
