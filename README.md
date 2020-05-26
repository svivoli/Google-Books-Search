# Google Books Search

## Links to Project

[Live Site](https://g00gleb00ks.herokuapp.com/)  
[GitHub Repository](https://github.com/svivoli/Google-Books-Search)

## Description

A MERN app that allows users to search, preview, and save books from Google. There are two pages, the home/search page where users search for books and view results and the saved page where the books they save are stored via MongoDB. Saved books can be deleted.

### Modules/Technologies

1. MongoDB
2. Express
3. React
4. Node

### Website Components

1. Navbar - "Google Books", "Search", "Saved"
2. Jumbotron with site description and image
3. Home/Search page components:
- Search bar
- Result cards with:  
    Title, author, thumbnail, description, linked preview button, save button
4. Saved page components:
- Saved cards with:  
    Title, author, thumbnail, description, linked preview button, delete button
5. Flaticon icons
6. Bootstrap

## User experience

![Home](home.png)
The home page displays related search results after the user searches for a book by keyword. The user can save a book by clicking the save icon on the respective div of the book they wish to save to their collection. The preview button will take them to the Google Books site with the related book's search results.

![Saved](collection.png)
When the user navigates to the saved page, they will see the books they have saved displayed in separate divs, just as they are displayed on the search page. Saved books can be removed from their collection by clicking the trash can icon button on their respective cards. Users can preview books from this page as well.

## Developer Experience

I rather enjoyed writing this app as it required a complex front-end and back-end structure. React is proving to be a useful tool in creating apps that are well structured and recyclable.

--Sarah Vivoli

Icons made by https://www.flaticon.com/