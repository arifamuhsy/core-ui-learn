import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListMainComponent } from './to-do-list-main.component';

describe('ToDoListMainComponent', () => {
  let component: ToDoListMainComponent;
  let fixture: ComponentFixture<ToDoListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
