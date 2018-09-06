import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './Containers/TestFeature';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'testarea',
    pathMatch: 'full'
  },
  {
    path: 'testarea',
    component: TestComponent
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
