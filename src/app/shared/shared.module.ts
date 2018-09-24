import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStoreModule } from '../root-store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RootStoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  declarations: [],
  exports:[
    RootStoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule {}
