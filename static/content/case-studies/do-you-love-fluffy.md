---
published: true
order: 0

title: Love Fluffy
thumbnail: /content/assets/fluffy-thumbnail.png
project_demo: /content/assets/fluffy-demo.mp4
project_type: Simple Web Game
project_link: 'https://jayyeung.github.io/love-fluffy/'
source: 'https://github.com/jayyeung/love-fluffy'
summary: >-
  Love Fluffy is a simple web game using plain JavaScript, SVGs, and GSAP for the
  animations and interactions in the game.
---
**The goal is to drag enough hearts to Fluffy (since we all love cats, right?) the given time limit in order to advance onto the next stage. You can give it a try [here](https://jayyeung.github.io/love-fluffy/).**

## What I've learnt

If you tried the "game" you might have realized that it is really hard to beat. In fact, **(spoiler alert)** it's impossible. The last heart will refuse to move if you try to drag it. Really, the point of this project was just to learn more about SVG and animation.

**Working on this project helped me:**
- Figure the relationship between vectors and the web.
- Learn animations and transitions.
- Solidify my knowledge in using SVG & animations to create interactive experiences on the web.

---

### Wait, what are SVGs?
If you don't know, Scalable Vector Graphics (SVGs) are just a special type of image format. They are different from other image formats because they don't use pixels to generate a picture.

<figure>
  <img src='/content/assets/fluffy-zoomed.png' alt='SVG & Raster comparison'/>
  <figcaption>Note the retention of quality on the vector image (left), when scaled.</figcaption>
</figure>

When you scale pixel-based/raster image, you need to scale every pixel causing bluriness. SVGs instead use mathematical lines & points (known as vectors) to generate a crisp image in any size.

With that in mind, SVGs are actually HTML-compliant elements that you can plop into your code and interact with.

```html
<!-- example of a SVG element -->
<svg>
  <path id="myElem" fill="#fd5" d="M257.505 59.808c17.493-2.964 29.272-19.557 26.31-37.06-2.552-15.077-15.365-26.268-30.64-26.76a32.11 32.11 0 0 0-6.399.434c-17.493 2.965-29.272 19.557-26.31 37.06 1.066 6.247 2.84 10.754 6.823 15.68-1.47 4.377-2.957 8.884-6.116 12.251 2.878.538 5.824.017 8.74-.242 3.638-.349 6.942-2.103 10.254-3.647 4.946 2.144 12.023 3.184 17.338 2.284z"/>
</svg>
```

I first create Fluffy using a vector editor then export code, naming each sub element using Ids: hands, tail, head, eyes... This is done to animate each limb independently later on.

```html
<!-- https://github.com/jayyeung/love-fluffy/blob/master/src/views/index.html -->

<svg id='cat'>
  <g id='head'>
    <path id='face' .../>
    ...
  </g>

  <g id='arms'>...</g>
  <g id='tail'>...</g>
  ...
</svg>
```

---

### Animating Fluffy

I decided to use a JavaScript animation library [GSAP](https://greensock.com/gsap) to animate Fluffy because it provides more functionality than regular CSS animations.

In particular, I wanted Fluffy to look in the direction of the heart when a user drags it close enough. Here, the animation depends on the distance and location of the heart, which would be impossible using CSS animations. 

  <figure>
    <img src='/content/assets/fluffy-look.gif' alt='Fluffy Eye Tracking'/>
    <figcaption>Eye tracking whenever the cursor holds the heart</figcaption>
  </figure>


- For distance (magnitude), we simply subtract the point where the heart is with the center of Fluffy's eyes.
- We then use simple trigonometry to figure the angle to rotate the eye balls if it's close enough.


Something I also felt intrigued to do was this tail-curling animation I saw on this [Dribble post](). 

  <figure>
    <img src='/content/assets/fluffy-wag.gif' alt='Fluffy Wagging'/>
  </figure> 

It took me a while, but I figured out a solution using a little trick with `stroke-dasharray`. Stroke-dasharray is a SVG attribute that lets you add dashes to a given path.

  <figure>
    <img src='/content/assets/fluffy-tail-impl.png' alt='Fluffy Tail Implmentation Example'/>
  </figure>

We can take advantage of the white gaps in-between these dashes by widening the space so much that you can only see a single dash. We then create the illusion of a curling tail by offsetting the stroke back and forth using `stroke-dashoffset`.

