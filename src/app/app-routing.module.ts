import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './containers/TestFeature';
import { NgModule } from '@angular/core';
import { MasterContainerComponent } from './containers/master-container/master-container.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full'
  },
  {
    path: 'testarea',
    component: TestComponent
  },
  {
    path: 'master',
    component: MasterContainerComponent
  }
  /*
  {
    path: 'login',
    component: LoginComponent
  },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
