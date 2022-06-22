##Installation instructions / Run Instructions
1. npm install --> this will install all the packages used in the project
   Open http://0.0.0.0:3000 to view it in your browser.
   local host will give an error!
2. npm test --> to run test
3. npm start --> Runs the app in a local environment 
4. npm run build --> builds the application for production 


##Aproaches
1. Used React & Javascript to create front end components. The benefit of this is that its the languages I am most comfortable with. I could have use Typescript, but I am not as familiar with it. The tradeoff of this is not having Type inference.

2. Used Redux for project wide state management. Two slices were used. One slice to store the data that is recieved from the API calls, and the other store the states of query parametes for the api calls. This made it easier to follow. 
  - Chose to use Redux instead of context even though additional installation may drive up final bundle, because it works well with dynamic data and static data. 
  - with Redux Dev Tools it makes it easy to debug
  - Avoids prop drilling

3. I used css modules for styling, as personally I really like the protability and resuability of the css files without creating too  much clutter

4. The component folder setup is as follows ->
   - nav 
      - includes Nav component which is the parent component to all the filter options 
   - body
      - holds the parent component ViewResult which will return all the media data requested to api
   -  imageColumn
      - parent element to all the mediacards that hold the media thumbnails and descriptions
      - implemented react masonry to have the same effect the imgur holds
   - fullscreenImage
      - holds ImageFull -> parent element to showing more details of the media when clicked on
   - footer
      - holds Pagination -> controls the pagination of the page
   - error
      - holds ErrorMessage -> which appears in case of an error message return from the api call

5. hooks folder holds the requests file which holds the request function for getting the data from imgur api

6. store folder holds the redux files used for this project

7. Testing Environment:
   1. Tests cover each parent component -> NavBar, Resultview,  Footer
   2. first tests are used to check if elements are loading
   3. last tests check the state changes with the request, ensuring the a new request is made when a state changes
