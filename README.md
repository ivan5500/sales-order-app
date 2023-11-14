# SalesOrderApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Online app

- This project has been implemented on Github pages which you can access by clicking the following link [Online Sales Order App](https://ivan5500.github.io/sales-order-app/).

## Development server

- Run `npm install` to install all dependencies of project.
- Run `ng serve` for a dev server. 
- Navigate to `http://localhost:4200/`. 
The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Description App

Order Management Website
Sale

### General description

Create a responsive web page to generate sales orders. The page must be able to
create them, consult them and cancel them. All information must be persisted locally and
architecture should consider transparently changing persistence to an API
REST.

### Deliverables

- Private GIT repository (access will be requested once the test is delivered)
  with the source code of the solution.

* The repository must have clear instructions for compiling and running
  the application.

### Requirements

General
All pages must include the following attributes in their rendering for an order
selling:

- Sales order ID.
- Creation date (dd/mm/yyyy)
- Cancellation date (dd/mm/yyyy)
- Customer name.
- Item(s) purchased
- Article name.
- Price.
- Amount.
- Subtotal, VAT and total.

### Creating a sales order

Generate a page that allows the creation of sales orders. This page must request
the next information:

- Name of the client (buyer)
- Item(s) purchased.
- Article name.
- Price.
- Amount.
  If an item was already used in a previous purchase order, the price of the item must be respected.
  First article.

### Consultation of sales orders.

Create a page that is capable of consulting existing sales orders in the system.

- Add a filter by creation date range.
- Add a filter by cancellation date range.

### Consultation of a sales order.

Create a functionality to consult a sales order by clicking on it on the page
sales order consultation.

### Cancellation of a sales order.

Create a functionality to cancel a sales order by clicking on it on the page
sales order consultation.

### General considerations

- Arrange and decorate the requested pages as you consider necessary taking into account
  Account for practical UI/UX improvements.
- Add as many validations as you consider necessary.
- Add as many unit tests as you consider necessary.
- Use only one language (Spanish or English) to write the code and content
  of the page.
- You have 3 business days to develop the test.
