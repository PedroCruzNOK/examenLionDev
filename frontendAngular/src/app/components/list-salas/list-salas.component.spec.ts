import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalasComponent } from './list-salas.component';

describe('ListSalasComponent', () => {
  let component: ListSalasComponent;
  let fixture: ComponentFixture<ListSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSalasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
