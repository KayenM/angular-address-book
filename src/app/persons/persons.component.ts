import { Component } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

//Code behind for persons component html
export class PersonsComponent {
  persons: Person[] = [];
  constructor(private personService: PersonService) {}
  
  //On component creation we call getPersons() which calls service to generate the mock contact info
  ngOnInit(): void {
    this.getPersons();
  }

  //Subscribe will wait for service to fetch data from api before assigning it
  getPersons(): void {
    this.personService.getPersons()
        .subscribe(persons => {
          this.persons = persons
        });  
      }
}



