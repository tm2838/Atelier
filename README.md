# Atelier

Project Atelier comprises a complete redesign of a client-facing retail portal to save sales numbers.

To run application locally:

1. Clone this repo
2. Set up an AWS account, create a public s3 bucket (this [policy generator](https://awspolicygen.s3.amazonaws.com/policygen.html) may be helpful), and generate an access key
3. Copy and paste the `.env.example` file, rename it to `.env`, and replace the corresponding fields
4. Open a terminal window and run `npm install`
5. Open a new terminal window and run `npm run react-dev`
6. Open a new terminal window and run `npm start`
7. Navigate to `http://localhost:3000/product/47421` and enjoy!

To stop application, press `CTRL + C` in each of the above terminal windows.

To run unit tests, in a new terminal window, run `npm test`

To view linting problems, in a new terminal window, run `npm run lint`