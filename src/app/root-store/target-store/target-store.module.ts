import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('target', featureReducer),
  ],
  declarations: []
})
export class TargetStoreModule { }
