# Atelier
Project Atelier comprises a complete redesign of a client-facing retail portal to save sales numbers. Or rather that's the narrative fueling this Front End Capstone Project.

## Demo
Here is a visual representation of our app:
- __Product overview:__
  - The image gallery on the left displays photos of the product specific to the currently selected product style
  - Customers are able to browse between and zoom in on photos by clicking on the arrow/expand buttons
  - General information (star ratings, product category, product title and price) about the product is displayed on the right, together with a style selector and a size selector

  ![ezgif com-gif-maker](https://user-images.githubusercontent.com/43324065/150608694-e8c911ff-867a-4fd9-bab5-836bbb182ac9.gif)

- __Related products & Outfits:__
  - 'Related Products' consists of products that are related to the currently viewed product, and 'Your Outfit' contains products the customer adds to their personalized collection
  - Products will be displayed in a carousel when there are more than 4 in the list
  - Each product card shows relevant product information, and can navigate the customer to the detail page for that product on click
  - Customers are able to add the current displayed product to the 'Your Outfit' list, which persists even when the customer navigates to another product's detail page
  - An action button is located at the top right corner of each product card. For related products, it appears as a star icon which would open up a modal comparing details of the current displayed product to those of the one that was just selected. For outfits, it appears as a circled-x icon which would remove the selected product from the list

  ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/43324065/150609251-d21021d1-ab5d-4624-b2e3-cf3c9e007ece.gif)

- __Ratings & Reviews:__
  - Browsing reviews
    - A reviews list displays all the reviews that have been submitted for the product being viewed. 2 reviews are shown at a time. If there are more than 2 reviews, a button for 'More Reviews' appears below the list. Clicking on the button causes up to 2 additional reviews to appear
    - Customers are able to change the order of the reviews displayed by selecting an option (Helpful, Newest, Relevant) in the sort dropdown
    - Customers can mark a review as helpful or report a review

  ![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/43324065/150609618-ac71beb3-587c-4358-9e77-106dd585f598.gif)

  - Posting reviews:
- Posting reviews:
  - Posting reviews:
    - The 'ADD A REVIEW' button allows customers to write new reviews for the product
    - Certain fields on the form are required for submission
    - Customers can also upload up to five photos for their review

  ![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/43324065/150609778-f062b5ec-b66b-4cef-b7ee-d2b173c95269.gif)

  - Ratings:
- Ratings:
  - Ratings:
    - A summary of the ratings for the product is displayed at the top. The average rating is displayed both as a number and as represented by the star icons
    - A breakdown of star ratings is displayed below. Each bar is clickable and acts as a filter for the displayed reviews. Filters can be removed by clicking on the same bar again or on the 'Remove all filters' button
    - Another breakdown of the specific characteristics of the product is displayed at the bottom, showing feedback for each characteristic on a 5-point scale

  ![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/43324065/150609525-559bb9f4-bb39-445d-aaa7-8446f88e9d8e.gif)

- __Dark theme:__

  ![ezgif com-gif-maker (5)](https://user-images.githubusercontent.com/43324065/150610198-79dd9b31-69b5-4bca-ad49-e90729adf350.gif)


## Usage

### Run
To run application locally:

1. Fork and clone this repo
2. Set up an AWS account, create a public s3 bucket (this [policy generator](https://awspolicygen.s3.amazonaws.com/policygen.html) may be helpful), and generate an access key
3. Copy and paste the `.env.example` file, rename it to `.env`, and replace the corresponding fields
4. Open a terminal window and run `npm install`
5. Open a new terminal window and run `npm run react-dev`
6. Open a new terminal window and run `npm start`
7. Navigate to `http://localhost:3000/product/47421`
8. Navigate different products by changing the productId at the end of the url (starting with 47421)
9. Enjoy!

To stop application, press `CTRL + C` in each of the above terminal windows.

### Test
To run unit tests, in a new terminal window, run `npm test`

To view linting problems, in a new terminal window, run `npm run lint`

## Developement

### Bug / Feature Request
Want to contribute? Fantastic!

If you run into any bugs kindly open an issue [here](https://github.com/The-Chonky-Panda/Atelier/issues)\
Please include steps to recreate bug and the expected results

To fix a bug on your own or make a contribution follow these steps:
1. After cloning locally, create a new branch (`git checkout -b bug-fix`)
2. Make the appropriate changes
3. Commit changes
5. Push to the branch (`git push origin bug-fix`)
6. Create a Pull Request

If you'd like to request a new feature, please do so with a detailed description [here](https://github.com/The-Chonky-Panda/Atelier/issues)

## Built with
- [React](https://reactjs.org/docs/getting-started.html)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Redux](https://redux.js.org/introduction/getting-started)
- [react-router](https://reactrouter.com/web/guides/quick-start)
- [Babel](https://babeljs.io/docs/en/)
- [Webpack](https://webpack.js.org/concepts/)
- [eslint](https://eslint.org/docs/user-guide/getting-started)
- [Jest](https://jestjs.io/docs/getting-started)

## Team

[Tingjun Man ](https://github.com/tm2838)\
[Surekhaw Weinberg](https://github.com/surekhaw)\
[Justin Belding](https://github.com/shabbyblue16)
