import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test-component/test-feature.component';
import { SharedModule } from '../../SharedModule';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TestComponent]
})
export class TestFeatureModule {
}
