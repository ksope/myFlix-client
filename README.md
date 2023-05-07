Project title: myFlix-client

Project Description:
myFlix ia a Single Page Application where users are able to access information about movies they have watched or interested in.This project is using React to build UIs and Parcel to handle build process. There are 3 components: MainView, MovieCard, and MovieView created using JSX.

Components:
The MainView component has 5 movies in the movies array state.
The MovieCard component displays the movie's title.
The MovieView component displays more information about the movie. It renders the movie’s title, description, its poster image, genre, director, etc.


How to Install and Run the Project:
1. Navigate the the project root folder and run the following command in a CLI "parcel src/index.html". This will initiate build process.
2. Open a web browser and enter "https://localhost:1234" to access the SPA

How To UsHow to Use the Project:
1. click on a movie card to go the movie view.
2. Click the 'Back' button in the displayed MovieView to navigate back to MainView’s original state.

Future planned features and functionality:
Main view
● Returns ALL movies to the user (each movie item with an image, title, and description)
● Filtering the list of movies with a “search” feature
● Ability to select a movie for more details
● Ability to log out
● Ability to navigate to Profile view

Single Movie view
● Returns data (description, genre, director, image) about a single movie to the user
● Allows users to add a movie to their list of favorites

Login view
● Allows users to log in with a username and password

Signup view
● Allows new users to register (username, password, email, date of birth)

Profile view
● Displays user registration details
● Allows users to update their info (username, password, email, date of birth)
● Displays favorite movies
● Allows users to remove a movie from their list of favorites
● Allows existing users to deregister

Actors view
● Allows users to view information about different actors

Genre view
● Returns data about a genre, with a name and description
● Displays example movies

Director view
● Returns data about a director (name, bio, birth year, death year)
● Displays example movies from the director

Single Movie view (optional features)
● Allow users to see which actors star in which movies
● Allow users to view more information about different movies, such as the release date and
the movie rating
● Allow users to access different movie information, such as genre description and director bio,
without leaving the view (e.g., tooltips)
● Allow users to share a movie
● Display a list of related or similar movies

Main view (optional features)
● Allow users to sort movies based on different criteria

Profile, Single Movie, and Main views (optional features)
● Allow users to create a “To Watch” list in addition to their “Favorite Movies” list


