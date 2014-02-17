### Addendum, posted via email, "DGMD E-15 Notes for 6 February 2014"


#### Adding requestAnimationFrame

> We talked through the Hangout code which used requestAnimationFrame; we'd like you try to bringing that technique to the Portfolio project.  You may want to begin by reviewing animation the work we've done to animate a square from A => B.  The div containing all the projects is the target of your animation.  You'll want to pay special attention (as came up with our square example) to the edge cases--what do you want to happen and when do you want to start/stop?

#### Fixing the absence of `:hover` effects in scrolling

> In addition to the scrolling, go ahead and give the implementation of the scalloped hover functionality of the panels a shot; i.e. on the Apple site, take a look at the animation that happens when you hover over a panel.

Understandably, some folks found this original description confusing or incomplete.  To clarify: if you check out the timeline on the Apple site, you'll notice that while the timeline is scrolling, there is a `:hover` effect--namely, the panels get lighter.  On our Portfolio, mousing over panels makes them lighter; _however_, while scrolling to the right, as panels pass under the mouse (_i.e._ an "implicit" `mouseover` event) they _are not affected_.  We were hoping folks might take a stab at fixing this.