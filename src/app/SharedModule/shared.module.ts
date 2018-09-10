import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStoreModule } from '../root-store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RootStoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  declarations: [],
  exports:[
    RootStoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ]
})
export class SharedModule {}
