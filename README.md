# Dashboard Page
## Self-guided React Project 

#### don't want to create an account? use this login info: 
* email: gato@cat.com
* pass: test123

This React App is just designed to be a dashboard page - it has an input field where you can write a list of todos, it uses a stored user zipcode to show local weather conditions and it shows a random inspirational quote. These were the general parameters given by Codecademy, but I wanted to practice using Firebase so I added a nav bar up top that shows a stored user image and name. I also used it to store zipcodes, and I ended up using it to store the weather API key.

I added icons to each todo, that way you can delete or mark them as complete. Once you've completed something, an option also appears to "redo". Confetti appears when todos are marked complete.

You can log in, log out, and sign up to the page. 

The page was designed as a dashboard (larger screens), but I quickly went through to give it some basic responsiveness so the elements wouldn't all collapse on each other.


### Languages / Libraries

React, JavaScript, CSS HTML

Firebase, Tailwind, Google Fonts, Font Awesome Icons, React-Dom-Confetti

### Project Highlights

    1. Styled with Tailwind, got familiar with their classes and added more styles to the config file
    2. I liked the confetti. It's fun.
    3. Use of two web APIs
    4. Fade in animations
    5. Image backgrounds that you can click through 
    6. Simple screen-size responsiveness
    7. Usual React stuff like state, useEffect, useHistory, useParams, react router-dom, forms, redirects
    8. Lots of custom hooks, such as one for using collections and documents from Firestore, using Auth context, Logging users in and out, and signing users up
    9. FireBase Auth, Storage, FireStore
    10. Authentication guards for certain routes

    

### What I learned / Challenges

This was my first time using Tailwind - initially, I was like "this takes so much longer!", but my mind was definitely changed by the end of the project. It certainly makes it quicker to get a page up and running, so I would definitely use it again. However, I only addressed responsive screen size at the end of the project, and I think it would be easier to do that as you're writing the initial styles.

I got more practice with Firebase, which was what I wanted as well. I had to re-write some hooks to accommodate Firebase 9, and that was helpful because it gave me a better understanding of how the new methods worked. 

### Things to add:

    1. I would like to add parameters/error messages to the input fields (i.e, passwords must be 6 characters, user names no more than 10 characters). I have a regex for 5 digit zipcodes as well, but it only works for U.S. codes. It would be good to expand it so that it can accommodate other types of zipcodes.
    2. A higher level of screen size responsiveness...again, wasn't necessarily designed for phones, but there are still more things that can be done so it looks nicer on smaller screens.
    3. I'd like to set it up so that the todo's are stored in Firebase, that way each user can save their own lists. 
    4. I want to add an "Account Settings" page - right now, I have the link in the navbar but it isn't functional. In that settings page, I want to be able to change the zipcode, profile pic, and (if firebase allows) a place to change the username and password. 
    5. In the todo section, it might be nice to have it split into two parts - a "completed" and "finished" section. 
