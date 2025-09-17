import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeesSkill } from './search-employees-skill';

describe('SearchEmployeesSkill', () => {
  let component: SearchEmployeesSkill;
  let fixture: ComponentFixture<SearchEmployeesSkill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchEmployeesSkill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEmployeesSkill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
