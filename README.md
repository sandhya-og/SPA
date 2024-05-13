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

### Angular Application Structure
#### 1. Components:
Header Component:

Description: Header component containing a search bar and button.
Files:
header.component.html: HTML template for the header component.
header.component.css: CSS styles specific to the header component.
header.component.ts: TypeScript code for the header component.

Repository List Component:

Description: Component to display repositories with pagination.
Files:
repository-list.component.html: HTML template for the repository list component.
repository-list.component.css: CSS styles specific to the repository list component.
repository-list.component.ts: TypeScript code for the repository list component.

2. Models:
Repository Model:
Description: Data model for repositories fetched from GitHub.
File:
repository.model.ts: TypeScript file defining the repository data model.

4. Services:
GitHub Service:
Description: Angular service to interact with GitHub's API and fetch repositories.
Files:
github.service.ts: TypeScript code for the GitHub service.

6. Other Files:
App Module:

Description: Angular module file where components and services are imported and declared.
File:
app.module.ts: TypeScript file for the root module of the application.
App Component:

Description: Main component of the application that hosts other components.
Files:
app.component.ts: TypeScript code for the root component.
App Routing:

Description: File defining routes for the application.
File:
app.routes.ts: TypeScript file defining routes for the application.
App Configuration:

Description: Configuration file for the application.
File:
app.config.ts: TypeScript file containing application configurations.
Testing Files:

Description: Files for testing components and services.
Files:
header.component.spec.ts, repository-list.component.spec.ts, api.service.spec.ts, github.service.spec.ts: Testing files for respective components and services.
Stylesheets:

Description: CSS files for styling components.
Files:
app.component.scss, app.component.css, header.component.css, repository-list.component.css: CSS files for respective components.
Index HTML:

Description: HTML file as the entry point of the application.
File:
index.html: HTML file serving as the entry point of the application.
Assets:

Description: Directory for storing static assets like images, icons, etc.
Directory:
/assets: Directory for storing static assets.

5. Components:
Skeleton Loader Component:
Description: Component to display a skeleton loader while data is being fetched.
Files:
skeleton-loader.component.html: HTML template for the skeleton loader component.
skeleton-loader.component.scss: SCSS styles specific to the skeleton loader component.
skeleton-loader.component.ts: TypeScript code for the skeleton loader component.

#### Note:

Ensure all necessary modules, components, and services are imported and declared properly in the respective files.

Follow Angular best practices and naming conventions for consistency and readability.

Use appropriate CSS class names and organization for styling components.

Test components and services thoroughly to ensure functionality and reliability.

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
