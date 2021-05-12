# Development Journal

## 2021-05-11: Getting Started
Not exactly starting now, but starting this document. Quato is an app I've wanted to build for a while. My hope is I can build it out enough so it works and I can use it myself. Stretch goal is to convince my partner to use it too. 

More on what it does later on when it does something, but for now I'm working on setting up the project and picking the stack. I'm torn between using what I am familiar with and enjoy, and trying out some new tools that I've been interested in but haven't had the chance to work with yet. So I'm doing a little bit of both. 

__Technologies that I know and love:__

* Typescript
* GraphQL
* React Native & Expo

     _I haven't used it in a few years but I remember loving it._
* Apollo Client
    
    _Been using this for a while but haven't had a chance to use the offline-first features, which I think will be a good fit for Quato._

__Some things that are new-to-me:__
* React Native Paper
* FaunaDB
    
    _Heard one of the founders on a podcast and what he said really resonated with me. Also Fauna has a direct GraphQL API!_
* Authenticating with Facebook and/or Google

    _Not wonderful but need to authorize something and authorizing on the backs of these folks with help with adoption by my second user._

### Setting Up the Project
I used the expo-cli to set up the project initially. I don't have a strong opinion about how to organize the project, beyond needing it to be organized, so I'll try to follow the layout that Expo generated.

I added _react-native-paper_ to use the UI widgets _ESLint_, _Prettier_, and _Husky_ to make sure the code is formatted consistent. I also added a README and this file.

I've also started replacing some of the generated expo code with some rough versions of a some of the basic screens I'm thinking of.

### What's Next?
1. Get the _SafeArea_ working properly.
1. Clean up my AddOpinion Screen so it is usable.
1. Add React Hook Form to wire up the AddOpinion form.
1. Add docker-compose to run FaunaDB container locally.
1. Set up basic GraphQL schema for FaunaDB.
1. Add Apollo client and create mutation to write data from AddOpinion form to fauna.
1. Work on the next screen.