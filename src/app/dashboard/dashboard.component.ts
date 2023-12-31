import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPersons();
  }
  //TODO: Change to using | async to handle subscribe and unsubscribe
  getPersons(): void {
    this.personService.getPersons()
      .subscribe(persons => this.persons = persons.slice(0, 4));
  }
}