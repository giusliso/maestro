import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterContainerComponent } from './master-container.component';
import { MenuComponent } from './menu/menu.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { WorkPaneComponent } from './work-pane/work-pane.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailsPaneComponent } from './details-pane/details-pane.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MasterContainerComponent,
    MenuComponent,
    OrganizerComponent,
    WorkPaneComponent,
    NavigationComponent,
    DetailsPaneComponent]
})
export class MasterContainerModule { }
