IMPLEMENT REACT CODE INSIDE UI FOLDER
--------------------------------------

Description:
Create a React app in which the user is able to type in a markdown text area. The typed text should be converted and visible in a separate output section and upon double clicking or selecting a phrase from it should get the details of that phrase using Wikipedia API.
Add a reset button to clear the text area, Preview and Wiki details. 

Points to be focused:
•	Component building.
•	Good and friendly UI/UX. 
Hint: Add loaders, Error messages, Validation where needed.
•	Folder structure.
•	Coding style and standard.
•	Use Redux for storing and removal of data.

Note: Time for this task is 2.5 hours, and should be submitted via public GitHub repo.

Wikipedia API:
https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exintro=1&titles=PHRASE


Implement authenticated routes to 
  - store, 
  - get (all and by id), 
  - update, 
  - delete wikipedia posts you will get calling wikipedia api 
You will Implement this task inside wikiController file located in /src/controllers/wikiController