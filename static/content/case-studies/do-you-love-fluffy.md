---
draft: true
title: Love Fluffy
thumbnail: /content/assets/fluffy-thumbnail.png
project_demo: 'https://www.youtube.com/watch?v=bhO_Z6YeZLI&t=4179s'
project_type: Simple Web Game
project_link: 'https://www.youtube.com/watch?v=bhO_Z6YeZLI&t=4179s'
source: 'https://www.youtube.com/watch?v=bhO_Z6YeZLI&t=4179s'
summary: >-
  Love Fluffy is a simple web game using plain JavaScript and GSAP for the
  animations and interactions in the game.
---
**The goal of the game is to drag the hearts onto Fluffy in order to "love" her. Your goal is to drag enough hearts within the given time limit in order to advance onto the next stage. You can give it a try [here](https://github.com/jayyeung/love-fluffy).**

## What I've learnt

Working on this project really helped me learn how to mainpulate SVG and animation together to create something interactive 

## Interesting points of implementation

Below are some ways of coding things that I found interesting when creating this project:

### "Winning" the game

First off, if you have played the game already then you might notice that it is next to impossible trying to drag the last heart. In reality (spoiler alert) it really is impossible. 




  <figure>
    <img src=/content/assets/fluffy-drag-trick.gif alt=Dragging Heart/>
    <figcaption>The last heart always shifts whenever you try to drag it.</figcaption>
  </figure>




I purposely made it with a tight time limit so that it seems like, if you really tried hard enough, you can get it in without noticing the last trick. **The reasoning behind this was to create something simple while giving someone a little chuckle whenever they played the game.**

### Eye staring in the direction of the mouse

One simple way I achieved it is simply **look at the direction of the heart** whenever the player grabs the heart and is close enough to Fluffy. 

  <figure>
    <img src=/content/assets/fluffy-look.gif alt=Fluffy Eye Tracking/>
    <figcaption>Eye tracking whenever the cursor holds the heart</figcaption>
  </figure>

Using simple trigonometry and some helper functions in `base.js` to find the centers and radii of SVG elements, Fluffy will look in the direction of the heart whenever the heart is close enough to her. 

```javascript
// scripts/main.js
heartEl.addEventListener('drag', function() {
    const x = Util.getCenter(this).x - Util.getCenter(eyes).x;
    const y = Util.getCenter(this).y - Util.getCenter(eyes).y;

    const dist = Math.sqrt(Math.abs(x*x + y*y));
    const rotate = Math.atan2(y, x);

    // Don't look if it's too far
    if (dist > 300) {
        TweenMax.to([eyeRP, eyeLP], 0.3, { rotation: 0, x: 0 });
	    TweenMax.to(tongue, 0.3, {scaleY: 0});
	    return;
    }

    // Make cat look at heart if close enough
    TweenMax.to([eyeRP, eyeLP], 0.3, {
        rotation: rotate + '_rad_short',
	    transformOrigin: 'left center',
	    x: Util.getRadius(eyeRP)
    });
// ...
}
```

### Tail curling animation

I actually got this inspiration off of a Dribbble post where the dog is wagging its tail in the app.
