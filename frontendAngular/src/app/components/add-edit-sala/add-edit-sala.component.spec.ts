import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSalaComponent } from './add-edit-sala.component';

describe('AddEditSalaComponent', () => {
  let component: AddEditSalaComponent;
  let fixture: ComponentFixture<AddEditSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
