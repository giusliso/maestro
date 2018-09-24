import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test-component/test-feature.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TestComponent]
})
export class TestFeatureModule {
}
