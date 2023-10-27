import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) { }
  private apiUrl = 'https://randomuser.me/api/?results=10&seed=nuvalence';  


  getPersons(): Observable<Person[]> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => {
        const results = response.results;
  
        let res = results.map((result: any) => ({
          fname: result.name.first,
          lname: result.name.last,
          phone: result.phone,
          notes: ""
        }));
        return res;
      }),
      catchError(this.handleError<Person[]>([]))
    );
  }

  //TODO: Use a cached system to fetch the matching user. Must change to matching by an ID not first name
  //Randomperson API will not allow searching for user, find alternative solution
  getPerson(fname: string): Observable<Person | undefined> {
    return this.getPersons().pipe(
      map(persons => persons.find(person => person.fname === fname)),
      catchError(this.handleError<Person>())
    );
  }


  /*
   Handle Http operation that failed.
   Let the app continue with no contacts.
 
   @param result - optional value for the observable returned
 */
  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging service
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty res
      return of(result as T);
    };
  }
}
