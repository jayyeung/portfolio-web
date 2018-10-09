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

Working on this project really helped me learn how to mainpulate SVG and animation together to create something interactive 

## Interesting points of implementation

Below are some ways of coding things that I found interesting when creating this project:

### "Winning" the game

First off, if you have played the game already then you might notice that it is next to impossible trying to drag the last heart. In reality (spoiler alert) it really is impossible. The last heart always shifts whenever you try to drag it. I purposely made it with a tight time limit so that it seems like, if you really tried hard enough, you can get it in without noticing the last trick. **The reasoning behind this was to create something simple while giving someone a little chuckle whenever they played the game. **

### Eye staring in the direction of the mouse

To give Fluffy more life, I wanted it make it excited for the heart once the user drags the it closer to him.

One simple way I achieved it is simply **look at the direction of the heart **whenever the player grabs the heart and is close enough to Fluffy. In a separate file, `base.js` I created three helper functions to help me find the positions of different svg elements.

```
export const Util = {
    // getCenter gets the center of the SVG element
    getCenter: (el) => {
        let bbox = el.getBoundingClientRect();
    
        return {
            x: bbox.left + (bbox.width/2),
            y: bbox.top + (bbox.height/2)
        };
    },
    
    // getRadius gets the radius or width/2 of the SVG element
    getRadius: (el) => {
        let bbox = el.getBoundingClientRect();
        return bbox.width/2;
    },

    // getOffset gets distance b/w two SVG elements
    // where el1, el2 = { x, y } coordinates
    getOffset: (el1, el2) => {
        return {
            x: (el2.x - el1.x),
            y: (el2.y - el1.y)
        };
    }
};
```

```javascript
heartEl.addEventListener('drag', function() {
    let x = Util.getCenter(this).x - Util.getCenter(eyes).x;
    let y = Util.getCenter(this).y - Util.getCenter(eyes).y;

    let dist = Math.sqrt(Math.abs(x*x + y*y));
    let rotate = Math.atan2(y, x);

    // Don't look if it's too far
    if (dist > 300) {
        TweenMax.to([eyeRP, eyeLP], 0.3, { rotation: 0, x: 0 });
        TweenMax.to(tongue, 0.3, {scaleY: 0});
        return;
    }
});
```

### Tail curling animation

Forget trying to memorize class names and visualise hex colors. Writing a custom theme for your favourite syntax highlighter doesn't have to be hard!

This `delay: (el, i, e) => {...}` is in JavaScript

```javascript
import React, { PureComponent } from 'react';
import posed, { PoseGroup } from 'react-pose';

class Transition extends PureComponent {
    // Note the render
    render() {
        const { children, location } = this.props;
        const RouteWrapper = posed.div({
            enter: { opacity: 1, delay: 300, beforeChildren: true },
            exit: { opacity: 0 },
        });
    }
}

export default Transition;
```

Notice how whenever we `render()` the component, the RouteWrapper is executed?

```javascript
class RouteWrapper extends {

}
```

## What I've learnt
