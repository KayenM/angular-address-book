import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';

import { PersonDetailComponent } from './person-detail.component';
import { Person } from '../person';
import { PersonService } from '../person.service';

describe('PersonDetailComponent', () => {
  let component: PersonDetailComponent;
  let fixture: ComponentFixture<PersonDetailComponent>;
  let personService: PersonService;
  let route: ActivatedRoute;
  let location: Location;

  const mockPerson: Person = {
    fname: 'Eira',
    lname: 'Lossius',
    phone: '52702740',
    notes: 'Sample notes'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonDetailComponent],
      providers: [
        {
          provide: PersonService,
          useValue: {
            getPerson: jasmine.createSpy('getPerson').and.returnValue(of(mockPerson))
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'Eira'
              }
            }
          }
        },
        Location
      ]
    });

    fixture = TestBed.createComponent(PersonDetailComponent);
    component = fixture.componentInstance;
    personService = TestBed.inject(PersonService);
    route = TestBed.inject(ActivatedRoute);
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPerson on ngOnInit', () => {
    spyOn(component, 'getPerson');
    component.ngOnInit();
    expect(component.getPerson).toHaveBeenCalled();
  });

  it('should get person details', () => {
    component.getPerson();
    expect(personService.getPerson).toHaveBeenCalledWith('Eira');
    expect(component.person).toEqual(mockPerson);
  });

  it('should go back', () => {
    spyOn(location, 'back');
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });
});
