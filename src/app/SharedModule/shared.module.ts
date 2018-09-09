import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStoreModule } from '../root-store';
@NgModule({
  imports: [
    CommonModule,
    RootStoreModule
  ],
  declarations: [],
  exports:[
    RootStoreModule
  ]
})
export class SharedModule {}
