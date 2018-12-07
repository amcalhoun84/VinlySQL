vinly

To DO:

Consolidate data, maybe rewrite the database to be more general for demonstration purposes
* Beer 
  - Beer_Id
  - Type
  - Description
  - 'Popular' Examples
  
 * Wine
  - Wine_Id
  - Type
  - Description
  - Popular Examples
 
 * Pairing (Beer / Wine) 
  - Pairing_ID
  - Beer / Wine_ID
  - Food_ID
  
 * User -- is fine
 
 * User Favorites
  - Favorite_ID
  - User_ID -- connects to user
  - User_Favorite_Wine -- connects to wine
  - User_Favorite_Beer -- connects to beer
  
  Work up authentication, correct hashing?
  
  Create REACT FE, Android FE, have Cuedadr help with iOS.
