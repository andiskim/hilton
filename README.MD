# Introduction
This Hilton application utilizes the [Hilton Dev API](https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev) API for retrieving a list of reservations and creating reservations.  With this API, I've organized the application using the hotel name.

The application allows an employee to view all listings for a particular Hilton Hotel branch and gives them the option to add a reservation of a customer.

In terms of code organization, the folder structure is divided into 5 main parts:
* **api** - (this folder houses all the functions and files that are used for the api.  This folder is subdivided into “queries” for the graphql queries and “mutations” for the graphql mutations.
* **assets** - (this folder houses all the assets used in the application.  For this demo, I’ve added an “images” folder for the logo.  In other projects, I’ve also had other assets like fonts.)
* **components** - (this folder is further divided into the “reusable” and “screens” folders.  The “reusable” folder houses all the reusable components while the “screens” folder houses all the screens
* **navigators** - (this houses all the files related to navigation)
* **theme** - (this is for scalability and code clarity)


## Usage
In the main screen, simply input the next of the hotel.  The screen will navigate to a list of reservations for the specific hotel.  The “plus” icon at the bottom right pops a modal that allows the employee to enter reservation details.  Clicking “Add Reservation” will add the reservation, if successful, and then remove the modal.  The list will refresh to ensure that the data has been successfully inputted into the same but also to show the latest data.  Navigating back to the “Home” page will allow the user to navigate to another hotel.

## Misc. Functions Relevant for Mobile Applications
I’ve added a splash screen for when the application initializes.
I’ve used the new React Hooks feature for storing local state and managing lifecycle hooks.
I’ve made sure to design the application using flex tools so that the design is almost identical across all devices and screens.

## Other functions
A user cannot enter an empty value for the hotel and all inputs are required within the “Add Reservation” modal.
The hotel name is pre-populated within the “Add Reservation” modal for a better user experience.


## Shortcomings
Admittedly, there are a few short-comings of the application.   One is testing.  Although I was able to get Jest up and running, I am unfamiliar with enzyme and so much testing hasn’t been added using the enzyme framework. Another shortcoming is the errors from using absolute paths within Typescript.  This is something that I’d like to fix when i have more time.