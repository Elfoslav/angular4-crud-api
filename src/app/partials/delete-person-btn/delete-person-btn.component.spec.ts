import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePersonBtnComponent } from './delete-person-btn.component';

describe('DeletePersonBtnComponent', () => {
  let component: DeletePersonBtnComponent;
  let fixture: ComponentFixture<DeletePersonBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePersonBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePersonBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
