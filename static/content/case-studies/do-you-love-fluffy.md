---
draft: true
title: Do you love Fluffy?
thumbnail: /content/assets/fluffy-thumbnail.png
project_demo: 'https://www.youtube.com/watch?v=bhO_Z6YeZLI&t=4179s'
project_type: Simple Web Game
project_link: 'https://www.youtube.com/watch?v=bhO_Z6YeZLI&t=4179s'
source: 'https://www.youtube.com/watch?v=bhO_Z6YeZLI&t=4179s'
summary: >-
  Disguise Chatroom was a concept I had while doing a DailyUI Challenge. The app
  uses HTML/CSS, Vue.js and Meteor as the tech stack. The idea was that the
  chatroom allowed users to disguise themselves as other people
---
**Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ad in, velit similique itaque nihil quae beatae dolorum numquam expedita.**

## Interesting points of implmentation

Below are some ways of coding things that I found interesting when creating this project:

### Eye staring in the direction of the mouse

To give Fluffy more life, I wanted it make it excited for the heart once the user drags the it closer to him.

One simple way I achieved it is simply **look at the direction of the heart**. Using simple trigonometry:

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

**dsadsadsa**

**Here's a figure:**
