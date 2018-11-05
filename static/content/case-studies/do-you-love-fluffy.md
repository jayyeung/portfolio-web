---
published: true
title: Love Fluffy
thumbnail: /content/assets/fluffy-thumbnail.png
project_demo: /content/assets/fluffy-demo.mp4
project_type: Simple Web Game
project_link: 'https://jayyeung.github.io/love-fluffy/'
source: 'https://github.com/jayyeung/love-fluffy'
summary: >-
  Love Fluffy is a simple web game using plain JavaScript and GSAP for the
  animations and interactions in the game.
---
**The goal of the game is to drag the hearts onto Fluffy in order to love her (we all love cats right?). Your goal is to drag enough hearts within the given time limit in order to advance onto the next stage. You can give it a try [here](https://jayyeung.github.io/love-fluffy/).**

## What I've learnt

As someone who had self-taught design, creating icons and logos using Inkscape & Illustrator, I never realized how prevalent SVGs were on the web. **I wanted to create a simple project to learn how to take advtange of it.** 

**Working on this project helped me:**
- Figure the relationship between vectors and the web
- Learn animations and transitions
- Solidify my knowledge in using SVG to create interactive experience on the web.


### Wait, what are SVGs?
Scalable Vector Graphics (SVGs) are just another type of image format. 

Normally images use raster graphics — that is, blocks of colour (pixels) stacked one on top of each other to create the image. The problem with using rasters is that every image will only have a fixed amount of pixels. By scaling an image, you are also scaling the indivual pixels which cause blurriness. 

The solution to this is by adding more pixels to the image, however, it is impossible once you create the image.

<figure>
  <img src='/content/assets/fluffy-zoomed.png' alt='SVG & Raster comparison'/>
  <figcaption>Note the reduction of quality on the raster image (right), when scaled.</figcaption>
</figure>

Using SVGs solves this by **being able to resize itself without losing quality**.

Think about SVGs like this: instead of images being made of pixels, SVGs are **mathematical formulas that calculate an image** and **recalculate when you resize them**. If you actually open a file using a text editor, you can see these "mathematical formulas" in action.

```html
<svg>
  <path id="myElem" fill="#fd5" d="M257.505 59.808c17.493-2.964 29.272-19.557 26.31-37.06-2.552-15.077-15.365-26.268-30.64-26.76a32.11 32.11 0 0 0-6.399.434c-17.493 2.965-29.272 19.557-26.31 37.06 1.066 6.247 2.84 10.754 6.823 15.68-1.47 4.377-2.957 8.884-6.116 12.251 2.878.538 5.824.017 8.74-.242 3.638-.349 6.942-2.103 10.254-3.647 4.946 2.144 12.023 3.184 17.338 2.284z"/>
</svg>
```

In reality, these are actually HTML compliant elements that you can plop into your HTML and interact with!

Using a vector editor, [Inkscape](http://Inkscape.com), I first create Fluffy then split and export into several parts: hands, tail, head, eyes... This is done to animate each limb independently later on.

### Animating Fluffy

While animating Fluffy, I decided to use a JavaScript animation library [GSAP](https://greensock.com/gsap). Why? Because it provides more functionality than CSS animations.

One issue is that it is next to impossible knowing when an animation's started or finished without keeping track of time.

For example, I wanted Fluffy to look in the direction of the heart.

  <figure>
    <img src='/content/assets/fluffy-look.gif' alt='Fluffy Eye Tracking'/>
    <figcaption>Eye tracking whenever the cursor holds the heart</figcaption>
  </figure>

Here, the animation depends on the distance and location of the heart, which would be impossible with CSS animations.

another problem is that there is no easy way to chain sequences of animations unless you keep track of the timing for each sequence by hand. 

Whenever the user gives the heart to Fluffy, she should be changing emotions while shaking her head. Very difficult to do in CSS animations as you'll have to manually keep track of the timing to toggle each transition.


By far the coolest trick I did for Fluffy was the tail-curling animation; this requiresd animating custom SVG attributes which GSAP [lets you do easily.](https://greensock.com/AttrPlugin)

In particular, this involved using a little trick with `stroke-dasharray`. Stroke-dasharray is a SVG attribute that lets you add dashes to a given path.

  <figure>
    <img src='/content/assets/fluffy-tail-impl.png' alt='Fluffy Tail Implmentation Example'/>
    <figcaption>Visual example of how stroke-dasharray is used in the project.</figcaption>
  </figure>

We can take advantage of the white gaps in-between these dashes by widening the space so much that you can only see a single dash. We then create the illusion of a curling tail by offsetting the stroke back and forth using `stroke-dashoffset`.

## Conclusion

Overall, 

