---
published: true
order: 0

title: Disguise Chat App
thumbnail: /content/assets/disguise-thumbnail.png
project_demo: /content/assets/disguise-chat-demo.mp4
project_type: Web App
project_link: 'https://disguise-chat-app-hnpssuosqp.now.sh' 
source: 'https://github.com/jayyeung/disguise-chat-app'
summary: >-
  Simple chat app made using Vue.js and Meteor.js that lets you disguise yourself as another person and pretend to be them!
---
**A simple chat app with a twist: you can change who you are talking as. Try it [here](https://disguise-chat-app-ttoxhiylpb.now.sh/). (might take a while to boot up)** 

## What I learnt

This app was made from a concept design I made for a [DailyUI Challenge](https://www.behance.net/gallery/67654663/Disguise-Chatroom-Concept). For me, I wanted to learn how to create a full-stack app since I had very little experience in the back-end (aside from school projects).

**Working on this project helped me:**
- Learn how to create real-time applications
- Integrate Meteor's framework with Vue.js front-end
- Understand the big picture of what is needed to create a web app

Initially, I wanted to figure out a good workflow for working with design, front and backend together without being overwhelmed by different technologies. This led me to a full-stack framework called [Meteor](https://www.meteor.com/).

Meteor is a framework built on Node.js that couples the front-end and back-end together, making it easier to develop dynamic web/mobile applications. 

## Reflection

Overall, I had an educational albeit painful experience. The point of this project was to understand the big picture of the app — to figure a better way to work from wireframe to app.

**Deploying is difficult.** Meteor used to have a command `meteor deploy` that would host a Meteor app for free. Since then, you have to manually host it yourself. 

Initially, I tried using Heroku to deploy but had problems where building the app would always timeout. I eventually found another solution called [Meteor-now](https://github.com/jkrup/meteor-now) that tries to restore the ease to deploy that used to be `meteor deploy` by deploying through another free host.

The company that hosts these apps made it incompatible with meteor-now so there is no other free alternatives to host other than Heroku. Fortunately, I had deployed my app before the deadline, but it seems that it will be harder to deploy other projects in the future.

**Meteor has a lot of community packages although most of them are unmaintained.** There were times where I had to rely on packages that were 2+ years old or emulate the functionality of a feature myself.

For instance, I wanted every user to have a temporary account that deletes itself without needing to manually create one. This was much harder than expected.

Meteor includes an official [Accounts](https://github.com/meteor/meteor/tree/devel/packages/accounts-base) package but no option to manually create accounts using its API. I had to dig *real* deep to find a [5 year old solution](https://web.archive.org/web/20160913210817/meteorhacks.com/extending-meteor-accounts/) that uses a method not documented in the Accounts package at all. It was a very painful process to get it done.




