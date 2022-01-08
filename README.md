# pokemon_mob_app

Pokédex app with react native using a public API to fetch the data

# Features
 # Search Page
Search page that accepts a Pokemon name to search for. On hitting search, make an API call to the search endpoint.
Show's a loading when the API is in progress and stop the loading when the API is successful or throws an error on the display
Navigate to different screens only after API call is successful

 # Listing page
○ If the API returns successfully show all the Pokemon that are returned in the API on this page.
○ This page show's the images of the Pokemon as well as the title of the Pokemon in a grid format.
○ The listing page is infinite scrollable, as the user scrolls, load more Pokemon using the API. 
By default, the search API gets 10 items per page.
# Details Page
○ Details screen opens up on tapping on one of the Pokemon on the listing screen.
○ Show's all the details got by the API in a properly formatted design.
○ Display's a bookmark icon, tapping on it save's this Pokemon as a favorite on the device itself.
○ A Pokemon that is been bookmarked will be shown with the already a prefilled bookmark icon. Clicking on the same icon will remove it from bookmarks.
# Bookmarks Screen
○ The bookmark screen shows all the users bookmarked Pokemon. This data is stored locally on the phone.
