# POSTIES

## Description
Posties is a full-stack web application created on the most part with React Hooks that allows users to upload their images and save them in the cloud instead of having them storage on your desktop. Initially I wanted to do an Instagram clone but for V1 I will just focus on the ability to store them in an S3 bucket. In the future I want to this to be a real application, I got really excited when I came up with the name so this is a project that I will work on.

One thing that I would like to mention is that I based my design on Instagram first version and I am proud that the results where really close from what I was expecting.

![Wireframe](https://i.imgur.com/m8dU72m.png)

![Wireframe](https://i.imgur.com/jgYKgrF.png)

![Wireframe](https://i.imgur.com/NpdHKe1.png)

## MVP User Stories

> - As an unregistered user, I would like to sign up with email and password.
> - As a registered user, I would like to sign in with email and password.
> - As a signed in user, I would like to change password.
> - As a signed in user, I would like to sign out.
> - As a signed in user, I would like to update my postie.
> - As a signed in user, I would like to create a postie.
> - As a signed in user, I would like to delete a postie.
> - As a signed in user, I would like to see all my posties

## Reach Goal(s)
AWS S3 Bucket

### Authentication

| Method | URL
|--------|------------------------
| POST   | `/sign-up`
| POST   | `/sign-in`
| PATCH  | `/change-password/`
| DELETE | `/sign-out/`

### InstaPosts

| Method   | URL
|--------|------------------------
| POST   | `/instaposts`
| GET    | `/instaposts`
| GET    | `/instapost`
| PATCH  | `/instaposts/:id`
| DELETE | `/instaposts/:id`

## Wireframes
![Wireframe](https://i.imgur.com/Pd2SvL3.jpg)

## Tools

### Deployment

Github

Heroku

### Front-end
React Hooks

JSX

### Back-end
Postman

Express (Created 4RESTful routes for handling (GET, POST,PUT,PATCH and DELETE) requests)

AWS

### Database
MongoDb
Mongoose

## Links!

[Visit my back-end repo!](https://github.com/MichelleRahman21/capstone-backend-michelle)

[Back-end url](https://blooming-bayou-14570.herokuapp.com/)

[Front-end url](https://michellerahman21.github.io/capstone-frontend-michelle/)
## Unsolved problems
Be able to see other people's posties in real time using socket.io

Be able to like their Posties
In the future I would like to be able to create a format for the profile of the users
