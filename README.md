# React-Interview Prep

- This is Front-End Development Exercise which will consist of data retrieval and displaying theat data!

## Getting Started

- Choose the following Rront-End templates on StackBlitz to get started: https://stackblitz.com/

## Notes

- You are free to look up any documentation you may need
- You are free to use third party utility libraries
- Please do not use a pre-built package or other existing code for a carousel or slider.

## Objectives

1. Create the search bar at the top of the page
2. Display an initial “no images” message
3. Use this hard-coded data to display an image, and a previous and next button to go through the array of images: ["https://images.dog.ceo/breeds/pitbull/20190710_143021.jpg", "https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg", "https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg"]
4. Add functionality to your previous and next buttons:

- Allow the user to go forward and backward between the images
- When the user is at the end and clicks next put user on first image
- When the user is at the beginning and clicks previous put user on last image

5. Regulate the size of the images in your carousel so the buttons to navigate do not move around

## Fetch Data

1. Create a function that takes a search term (in this case a dog breed) and fetch the data from: “https://dog.ceo/api/breed/hound/images” where “hound” will be replaced by your search query.
2. Use your new function with the search feature
3. Display the images returned from the API call for your image carousel

## Resources

- [Sample API query](https://dog.ceo/api/breed/dalmatian/images)
- [Sample API query](https://dog.ceo/api/breed/hound/images)
- [API Docs](https://dog.ceo/dog-api/documentation/breed)
- [Dog Breed List](https://dog.ceo/dog-api/breeds-list)

## Examples
![Example Images]()
[Working Example](https://react-kx22nd.stackblitz.io/)
[Working Example Code ⚡️](https://stackblitz.com/edit/react-kx22nd)

## Axios Error on StackBlitz

- I ran into multiple errors with latest axios version on StackBlitz platform, I used a previous version with this command: npm install axios@0.26.1
- Dont need to use axios!

