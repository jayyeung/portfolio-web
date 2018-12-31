---
published: true
order: 0

title: Disguise Chat App
thumbnail: /content/assets/disguise-thumbnail.png
project_demo: /content/assets/fluffy-demo.mp4
project_type: Web App
project_link: 'https://disguise-chat-app-ttoxhiylpb.now.sh/'
source: 'https://github.com/jayyeung/disguise-chat-app'
summary: >-
  Simple chat app made using Vue.js and Meteor.js that lets you disguise yourself as another person and pretend to be them!
---
**A simple chat app with a twist: you can change who you are talking as. Try it [here](https://disguise-chat-app-ttoxhiylpb.now.sh/). (might take a while to boot up)** 

## What I've learnt

This app was made from a concept design I made for a [DailyUI Challenge](https://www.behance.net/gallery/67654663/Disguise-Chatroom-Concept). For me, I wanted to learn how to create a full-stack app since I had very little experience in the back-end (aside from school projects). I wanted to ease my way into creating it.

**Working on this project helped me:**
- Learn how to create real-time applications
- Integrate Meteor's back-end with the Vue.js front-end
- Understand the big picture of what is needed to create a web app

Initially I was interested in using Node.js for the backend sicne that is what everybody uses. However, I didn't want to overwhelm myself with something too complex as I wanted to focus on figuring out a good workflow for combining the design, front and backend together. This led me to a full-stack framework called [Meteor](https://www.meteor.com/).

Meteor is a full-stack framework built on Node.js which couples the front-end and back-end to create effortless 

## Reflection

Overall, I learnt a lot through all the stumbles I went through to make it. The point of this was to make it simple, just so I can get a better workflow to work on the project.

**Creating temporary users was surprisingly difficult.** At first, I wanted the user to register before trying the app, but since it was only a concept, I wanted the program to automatically create a temporary user, then delete it after a while.

How hard could it be? ...much harder than I expected. Meteor includes an official accounts package that you can implement in your app. However, there are no options to let you simply create a user using its UI.  In the end, **I had to dig *real* deep into the source code to [find a method]() that's not even documented on the site to get it to work.**

**A lot of the dependencies are unmaintained or outdated**. Meteor seemed to be very popular around the 2015, where the time 


**Deploying was very difficult**. Perhaps apart of this stems from oudated buildpacks used to deploy Meteor projects onto Heroku.

