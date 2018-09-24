import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPaneComponent } from './work-pane.component';

describe('WorkPaneComponent', () => {
  let component: WorkPaneComponent;
  let fixture: ComponentFixture<WorkPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
