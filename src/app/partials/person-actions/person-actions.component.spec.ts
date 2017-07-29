import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonActionsComponent } from './person-actions.component';

describe('PersonActionsComponent', () => {
  let component: PersonActionsComponent;
  let fixture: ComponentFixture<PersonActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
