vinly

To DO:

Consolidate data, maybe rewrite the database to be more general for demonstration purposes
Gather explicit data and expand data tables: (Separate DB is already created with schema, original demo schema was for PoC)
* Beer - 
* Wine - Vintage, Winery, 'Name' if applicable
* Food - create dishes, built around food types -- add food types based on primary flavor profile

Wine / Beer Matching DBs
* Two options
  - match foods by flavor profiles
  - match foods by type as now, add 'notes', such as 'spicy', 'sweet', 'savory', etc.
  
 * User Favorites
  - Favorite_ID
  - User_ID -- connects to user
  - User_Favorite_Wine -- connects to wine - by varietal? Possibly easier than IDs.
  - User_Favorite_Beer -- connects to beer - by type? Possibly easier than IDs
  
  Matching by type would allow easier matching to types for recommendations.
  
  Create Android App, have Cuedadr help with iOS.
  Update REACT FE to be compatibile with phones and mobile devices.
  Write documentation for API.
