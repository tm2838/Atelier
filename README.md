# Atelier
Project Atelier comprises a complete redesign of a client-facing retail portal to save sales numbers. Or rather that's the narrative fueling this Front End Capstone Project.

## Demo
Here is a visual representation of our app:
- Product overview:  
![ezgif com-gif-maker](https://user-images.githubusercontent.com/43324065/150608694-e8c911ff-867a-4fd9-bab5-836bbb182ac9.gif)

- Related products & Outfits:  
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/43324065/150609251-d21021d1-ab5d-4624-b2e3-cf3c9e007ece.gif)

- Browsing Reviews:  
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/43324065/150609618-ac71beb3-587c-4358-9e77-106dd585f598.gif)

- Posting reviews:  
![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/43324065/150609778-f062b5ec-b66b-4cef-b7ee-d2b173c95269.gif)

- Ratings:  
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/43324065/150609525-559bb9f4-bb39-445d-aaa7-8446f88e9d8e.gif)



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
