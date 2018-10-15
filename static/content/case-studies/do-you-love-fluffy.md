---
published: false
title: Love Fluffy
thumbnail: /content/assets/fluffy-thumbnail.png
project_demo: 'https://www.youtube.com/watch?v=bhO_Z6YeZLI&t=4179s'
project_type: Simple Web Game
project_link: 'https://jayyeung.github.io/love-fluffy/'
source: 'https://github.com/jayyeung/love-fluffy'
summary: >-
  Love Fluffy is a simple web game using plain JavaScript and GSAP for the
  animations and interactions in the game.
---
**The goal of the game is to drag the hearts onto Fluffy in order to let her know you love her (cats are cute right?). Your goal is to drag enough hearts within the given time limit in order to advance onto the next stage. You can give it a try [here](https://github.com/jayyeung/love-fluffy).**

## What I've learnt

First off, if you have played the game already then you might notice that it is next to impossible trying to drag the last heart. In reality (spoiler alert) it really is impossible. 

  <figure>
    <img src=/content/assets/fluffy-drag-trick.gif alt=Dragging Heart/>
    <figcaption>The last heart always shifts whenever you try to drag it.</figcaption>
  </figure>

I purposely made it with a tight time limit so that it seems like, if you really tried hard enough, you can get it in without noticing the last trick. **The reasoning behind this was to create something simple while surprising the user whenever they play the game for the first time.**

Working on this project really helped me learn how to manipulate & use SVG on the web to create something interactive. Below are some of my thoughts and how I implemented parts of the project.


### Manipulating SVG

Part of using SVG 


Although I could just make a game where you drag things to a static object, I wanted to give character to the cat.

For this, I first had to find the coordinates of the SVG elements themselves, using `.getBoundingClientRect()` to get the properties of an element, then find the centers, radii, and distances between elements using the results.

```javascript
// scripts/base.js
export const Util = {
    getCenter: (el) => {
        const bbox = el.getBoundingClientRect();

        return {
            x: bbox.left + (bbox.width/2),
            y: bbox.top + (bbox.height/2)
        };
    },

    getRadius: (el) => {
        const bbox = el.getBoundingClientRect();
        return bbox.width/2;
    },

    getOffset: (el1, el2) => {
        return {
            x: (el2.x - el1.x),
            y: (el2.y - el1.y)
        };
    }
};
```

The next part was to animate the individual parts of the cat. Although CSS animation was an option, an issue that I encountered was that there is no easy way to chain sequences of animation between elements unless you keep track of the timing for each sequence by hand.

Green Sock Animation Plugin (GSAP) is a JavaScript library that lets you animate DOM elements easily by . It also provides helpful callback functions and a draggable object that I later used in the game.

One way I did this was to make Fluffy excited in anticipation whenever the heart is close enough to her. 

  <figure>
    <img src=/content/assets/fluffy-look.gif alt=Fluffy Eye Tracking/>
    <figcaption>Eye tracking whenever the cursor holds the heart</figcaption>
  </figure>

### Tail curling animation

By far the coolest trick I did for Fluffy was the tail-curling animation; I actually got this inspiration off of a Dribbble post where the dog is wagging its tail in the app and thought it was really cute.

How I did this involved using a little trick with `stroke-dasharray`. Stroke-dasharray lets you add dashes to a given SVG path.

  <figure>
    <img src=/content/assets/fluffy-tail-impl.jpg alt=Fluffy Tail Implmentation Example/>
    <figcaption>Here is a visual example of how \\`stroke-dasharray\\` is used in the project.</figcaption>
  </figure>

We can take advantage of the white gaps in-between these dashes by widening the space so much that you can only see a single dash. We then create the illusion of a curling tail by offsetting the stroke back and forth using `stroke-dashoffset`.
