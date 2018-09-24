import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TestFeatureModule } from './Containers/TestFeature/test-feature.module';
import { AppRoutingModule } from './app-routing.module';
import { Store, select } from '@ngrx/store';
import { RootStoreModule } from './root-store';
import { MasterContainerComponent } from './containers/master-container/master-container.component';
import { MenuComponent } from './containers/master-container/menu/menu.component';
import { OrganizerComponent } from './containers/master-container/organizer/organizer.component';
import { NavigationComponent } from './containers/master-container/navigation/navigation.component';
import { WorkPaneComponent } from './containers/master-container/work-pane/work-pane.component';
import { DetailsPaneComponent } from './containers/master-container/details-pane/details-pane.component';

@NgModule({
  declarations: [AppComponent, MasterContainerComponent, MenuComponent, OrganizerComponent, NavigationComponent, WorkPaneComponent, DetailsPaneComponent],
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
