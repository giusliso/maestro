import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizablePanelComponent } from './resizable-panel.component';
import { SharedModule } from '../../shared/shared.module';
import { ContainersModule } from '../containers.module';

describe('ResizablePanelComponent', () => {
  let component: ResizablePanelComponent;
  let fixture: ComponentFixture<ResizablePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContainersModule, SharedModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizablePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
