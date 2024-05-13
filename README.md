# GithubRepoListing

## Project Setup

Install dependencies using npm install.

Ensure you have Angular CLI installed globally (npm install -g @angular/cli).

Run the application locally using ng serve.

## Usage:

Open the application in your web browser.

Enter a GitHub username in the search bar and click the "Search" button.

The application will fetch and display the public repositories of the entered GitHub user.

Use pagination controls to navigate through the repository list.

On clicking the respository it will direct to that respository.

If username exists, There will generate a github link directing to that profile.

## Folder Structure

/src
├── /app
│   ├── /components
│   │   ├── /header
│   │   │   ├── header.component.html
│   │   │   ├── header.component.css
│   │   │   └── header.component.ts
│   │   ├── /repository-list
│   │   │   ├── repository-list.component.html
│   │   │   ├── repository-list.component.css
│   │   │   └── repository-list.component.ts
|   |   ├── /skeleton-loader
│   │   │   ├── skeleton-loader.component.html
│   │   │   ├── skeleton-loader.component.css
│   │   │   └── skeleton-loader.component.ts
│   ├── /models
│   │   └── repository.model.ts
│   ├── /services
│   │   └── github.service.ts
│   ├── app.component.ts
├── /assets
├── index.html

## Additional Notes:

Styling is done using Tailwind CSS. Refer to the Tailwind CSS documentation for customization.

The application supports Angular 14+ and uses Angular CLI for project management.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
