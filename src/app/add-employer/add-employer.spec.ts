import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployer } from './add-employer';

describe('AddEmployer', () => {
  let component: AddEmployer;
  let fixture: ComponentFixture<AddEmployer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmployer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
