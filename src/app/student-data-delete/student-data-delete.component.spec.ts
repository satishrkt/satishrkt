import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDataDeleteComponent } from './student-data-delete.component';

describe('StudentDataDeleteComponent', () => {
  let component: StudentDataDeleteComponent;
  let fixture: ComponentFixture<StudentDataDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDataDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDataDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
