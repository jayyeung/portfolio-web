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

I purposely made it with a tight time limit so that it seems like, if you really tried hard enough, you can get it in without noticing the last trick. The reasoning behind this was to **create something simple while surprising the user whenever they play the game for the first time.**

As someone who had self-taught design, starting from creating icons and logos using Inkscape & Illustrator, working on this project really **helped solidify my knowledge in using SVG to create interactive experience on the web.** Below are some of my thoughts and things that I encountered along the way.

### Manipulating SVG

Although I could just make a game where you drag things to a static object that just defeats the purpose of what I wanted to solve: **how do we animate SVG elements?** 

Well, one option that you can use are CSS animations. They work exactly like typical DOM elements. However, one issue that I encountered was that there is no easy way to chain sequences of animation between elements unless you keep track of the timing for each sequence by hand.

Green Sock Animation Plugin (GSAP) is a JavaScript library that lets you animate DOM elements easily by . It also provides helpful callback functions and a draggable object that I later use in the game.

One way I did this was to make Fluffy excited in anticipation whenever the heart is close enough to her. 

  <figure>
    <img src=/content/assets/fluffy-look.gif alt=Fluffy Eye Tracking/>
    <figcaption>Eye tracking whenever the cursor holds the heart</figcaption>
  </figure>

All I needed was to find the coordinates of the SVG elements themselves, using `.getBoundingClientRect()` to find the centers, radii, and distances between elements. 

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



### Tail curling animation

By far the coolest trick I did for Fluffy was the tail-curling animation; I actually got this inspiration off of a Dribbble post where the dog is wagging its tail in the app and thought it was really cute.

How I did this involved using a little trick with `stroke-dasharray`. Stroke-dasharray lets you add dashes to a given SVG path.

  <figure>
    <img src=/content/assets/fluffy-tail-impl.jpg alt=Fluffy Tail Implmentation Example/>
    <figcaption>Here is a visual example of how stroke-dasharray is used in the project.</figcaption>
  </figure>

We can take advantage of the white gaps in-between these dashes by widening the space so much that you can only see a single dash. We then create the illusion of a curling tail by offsetting the stroke back and forth using `stroke-dashoffset`.
