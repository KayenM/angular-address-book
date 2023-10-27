import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';
import { Person } from '../person';
import { PersonService } from '../person.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let personService: PersonService;

  const mockPersons: Person[] = [
    { fname: 'John', lname: 'Doe', phone: '123-456-7890', notes: 'Sample notes' },
    { fname: 'Alice', lname: 'Johnson', phone: '987-654-3210', notes: 'Another note' },
    { fname: 'Bob', lname: 'Smith', phone: '555-555-5555', notes: 'Note 3' },
    { fname: 'Eve', lname: 'Anderson', phone: '111-222-3333', notes: 'Note 4' },
    { fname: 'Charlie', lname: 'Brown', phone: '777-777-7777', notes: 'Note 5' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        {
          provide: PersonService,
          useValue: {
            getPersons: jasmine.createSpy('getPersons').and.returnValue(of(mockPersons))
          }
        }
      ]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    personService = TestBed.inject(PersonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPersons on ngOnInit', () => {
    spyOn(component, 'getPersons');
    component.ngOnInit();
    expect(component.getPersons).toHaveBeenCalled();
  });

  it('should get and display a list of persons', () => {
    component.getPersons();
    expect(personService.getPersons).toHaveBeenCalled();
    expect(component.persons).toEqual(mockPersons.slice(1, 5)); 
  });
});
