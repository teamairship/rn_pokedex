- Create a full width bar component above the Home Flatlist that displays the current number of Pokemon shown.
- Create a "store" that can be used throughout the app to house a favorite Pokemon's data.
  - Create a function to save a single Pokemon as a "favorite" in state.
    - This Pokemon needs to be saved to the device during this function as well.
    - Include a function to get the favorite Pokemon during app load and save to state so the data can persist.
- Create a new screen in the navigation stack for a detailed view of a single Pokemon.
  - You will navigate to this screen by tapping a Pokemon in the Home Flatlist.
  - Display the Pokemon's image full width across the top of the screen with a height of 300.
  - Have the name below the image.
  - Below the name add the `maxHP` of the Pokemon.
    - This will need to be added to the existing api query. Update types where necessary.
  - Display any special abilities below if present in the Pokemon.
    - Name
    - Type
    - Power
  - Create a button that calls your "save" function made earlier.
  - Add a "*" next to the Pokemon's name if it has been saved as the favorite.