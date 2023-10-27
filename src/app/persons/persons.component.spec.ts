import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PersonsComponent } from './persons.component';
import { Person } from '../person';
import { PersonService } from '../person.service';

describe('PersonsComponent', () => {
  let component: PersonsComponent;
  let fixture: ComponentFixture<PersonsComponent>;
  let personService: PersonService;

  const mockPersons: Person[] = [
    { fname: 'John', lname: 'Doe', phone: '123-456-7890', notes: 'Sample notes' },
    { fname: 'Alice', lname: 'Johnson', phone: '987-654-3210', notes: 'Another note' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonsComponent],
      providers: [
        {
          provide: PersonService,
          useValue: {
            getPersons: jasmine.createSpy('getPersons').and.returnValue(of(mockPersons))
          }
        }
      ]
    });

    fixture = TestBed.createComponent(PersonsComponent);
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
    expect(component.persons).toEqual(mockPersons);
  });
});
