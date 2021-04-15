## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision

## INDEX HTML phase1

1.  This is the launching pad for the rest of the app to build itself off of.  The page will be styled [ needs more definition]

    FEATURES:
        -  1. search by ingredient                                                           <!-- INPUT -->
                - will allow the user to search archived recipes by desired ingredient
                    * input HTML with a search type
                        
                        + the search query will search the data js object arrays for matching items and 
                        will build a return of the recipes that contain those objects into a <table> which will list recipe.name and recipe.cooktime and will render recipe.name in table as a <link> to the corresponding recipe.

                        + JS will render these results on this page in a display box
        
        -   2. browse recipes                                                               <!-- BUTTON -->
        
                - will allow user to use a drop down menu to look at available recipes
                    * button HTML with a #dropdown to style in CSS
                    * a <div> tag to create the drop down menu with <a> tags for each recipe
                        
                        + possibly a nested set of <divs> to create sub menus for different options of vegetarian
                                        <!-- note need to be sure to add a value of option in data.js -->
        -   3. menu planner
                - will allow the user to fill out a form to set parameters to build a menu planner that generates recipes and a shopping list and packages all of this for the user in a "custom meal plan" return.
                                                         <!-- more complex in scope and will be added -->
## INDEX HTML phase2

1. Will need to create the index for the recipe.html shell and link this to the app.js

## DEPENDENCIES

1. Will need to create the data modeling: a minimum of beginning objects to begin to manipulate data would be 5 -7 for the purpose of moving towards meal planning.

2.  After building data.js should have the ability to build out search ap.js

3.  This will allow for the creation of the recipe.html and the corresponding utility.js function to render out data.js onto the recipe page.



3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
