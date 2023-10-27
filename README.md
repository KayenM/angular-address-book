# AngularAddressBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## My Approach

I chose to  use this project as an opportunity to prioritize using best practices for creating angular web applications over visual appeal. The project uses 4 components: app, dashboard, persons, and person-detail. The dashboard shows the first four contacts that the API produces to mimic the favourites page of your contacts. The persons component displays a list of contacts. The person-detail component will render the details of a specific contact. 

Best practices followed:
- Component hierarchies (ex person-detail is a child or persons)
- Using observables, subscribe, and async functions when calling the API
- Error handling when calling the web API
- Unit tests for components to ensure the component is created and its functions work. Mocked the person service.
- Used styling and media breakpoints to make the page responsive for mobile and desktop users
- Appropriate use of semantic HTML

## Features

- Dashboard to view top contacts provided by API
- Get more info for each contact
- Ability to make notes for each contact. (Work in progress)

## Looking forward

I'd like to use a data server to get and store a users contact info. The backend API could then handle more requests such as post requests where the note's of each contact could be updated and the changes reflected. In addition, new users could be created and deleted. On the front end, it would be fun to embed a Google Map for each person's detail page as the API gives tons of data to manipulate including location data. See here for more info on how easy it is to embed a google map into a site: https://blog.hubspot.com/website/how-to-embed-google-map-in-html. 

I hope to make the site more accessible as new features are made. Currently, users can use the tab key to navigate the site and important elements are placed near the top, as well text input boxes have placeholder texts. If the app was more complex, then there would need to be a greater emphasis on accessibility for new features.

Overall, the project serves as an effective address book and some great front-end principles and practices! I had a lot of fun building it!

# Instructions

## Run on a local server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

