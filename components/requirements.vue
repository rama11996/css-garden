<template>
  <section>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStALynNIsh9T5dOn1O9fvaleYP0l-ePY-y1HEn-4bEBDWZGU74Hg" alt="">
    <div class="requirements" id="zen-requirements" role="article">
			<h3>Requirements</h3>
			<p>Where possible, we would like to see mostly <abbr title="Cascading Style Sheets, levels 1 and 2">CSS 1 &amp; 2</abbr> usage. <abbr title="Cascading Style Sheets, levels 3 and 4">CSS 3 &amp; 4</abbr> should be limited to widely-supported elements only, or strong fallbacks should be provided. The CSS Zen Garden is about functional, practical <abbr title="Cascading Style Sheets">CSS</abbr> and not the latest bleeding-edge tricks viewable by 2% of the browsing public. The only real requirement we have is that your <abbr title="Cascading Style Sheets">CSS</abbr> validates.</p>
			<p>Luckily, designing this way shows how well various browsers have implemented <abbr title="Cascading Style Sheets">CSS</abbr> by now. When sticking to the guidelines you should see fairly consistent results across most modern browsers. Due to the sheer number of user agents on the web these days &#8212; especially when you factor in mobile &#8212; pixel-perfect layouts may not be possible across every platform. That&#8217;s okay, but do test in as many as you can. Your design should work in at least IE9+ and the latest Chrome, Firefox, iOS and Android browsers (run by over 90% of the population).</p>
			<p>We ask that you submit original artwork. Please respect copyright laws. Please keep objectionable material to a minimum, and try to incorporate unique and interesting visual themes to your work. We&#8217;re well past the point of needing another garden-related design.</p>
			<p>This is a learning exercise as well as a demonstration. You retain full copyright on your graphics (with limited exceptions, see <a href="http://www.mezzoblue.com/zengarden/submit/guidelines/">submission guidelines</a>), but we ask you release your <abbr title="Cascading Style Sheets">CSS</abbr> under a Creative Commons license identical to the <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/" title="View the Zen Garden's license information.">one on this site</a> so that others may learn from your work.</p>
			<p role="contentinfo">By <a href="http://www.mezzoblue.com/">Dave Shea</a>. Bandwidth graciously donated by <a href="http://www.mediatemple.net/">mediatemple</a>. Now available: <a href="http://www.amazon.com/exec/obidos/ASIN/0321303474/mezzoblue-20/">Zen Garden, the book</a>.</p>
		</div>
    
  </section>
</template>
<style lang="sass" scoped>
@media (min-width: 750px)
  section
    color: white
    margin-left: 7rem
    margin-right: 7rem
    display: flex
    img
      margin-top: 10px
      height: 250px
      width: 300px
    div
      margin-top: 0rem
      h3
        color: Yellow 
@media (max-width: 530px)
  section
    color: white
    display: flex
    flex-direction: column
    img
      height: 300px
      width: 310px
    div
      h3
        color: Yellow   
@media (max-width: 750px)  
  section
    color: white
    display: flex  
    img
      height: 300px
    div
      h3
        color: Yellow 
</style>

