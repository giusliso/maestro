import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './SharedModule';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TestFeatureModule } from './Containers/TestFeature/test-feature.module';
import { AppRoutingModule } from './app-routing.module';
import { Store, select } from '@ngrx/store';
import { RootStoreModule } from './root-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
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
