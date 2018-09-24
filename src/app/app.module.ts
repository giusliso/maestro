import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TestFeatureModule } from './containers/TestFeature/test-feature.module';
import { AppRoutingModule } from './app-routing.module';
import { Store, select } from '@ngrx/store';
import { MasterContainerModule } from './containers/master-container/master-container.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MasterContainerModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    TestFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule, SharedModule, TestFeatureModule, AppRoutingModule]
})
export class AppModule {
  constructor(store: Store<any>) {
    store.select(s => s).subscribe(console.log.bind(console));
  }
}
