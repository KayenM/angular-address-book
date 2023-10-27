import { Component, Input } from '@angular/core';
import { Person } from '../person';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PersonService } from '../person.service';



@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent {
  @Input() person?: Person;
  constructor(private route: ActivatedRoute, private personService: PersonService, private location: Location ){}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const fname = String(this.route.snapshot.paramMap.get('fname'));
    this.personService.getPerson(fname)
      .subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }

  //TODO: If using a backend, have a POST API call to change the notes for stored people.

}

