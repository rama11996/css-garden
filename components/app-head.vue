<template>
  <section>
    <header role="banner">
			<h1>CSS Zen Garden</h1>
			<h2>The Beauty of <abbr title="Cascading Style Sheets">CSS</abbr> Design</h2>
		</header>
    <div class="summary" id="zen-summary" role="article">
			<p>A demonstration of what can be accomplished through <abbr title="Cascading Style Sheets">CSS</abbr>-based design. Select any style sheet from the list to load it into this page.</p>
			<p>Download the example <a href="/examples/index" title="This page's source HTML code, not to be modified.">html file</a> and <a href="/examples/style.css" title="This page's sample CSS, the file you may modify.">css file</a></p>
		</div>
  </section>
</template>
<style lang="sass" scoped>
 @media (min-width: 760px) 
  section
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_RPKz4zB6oPeoU8SVN35ev9GjkpN6vtX9fiVDmZS2OOO-Ru_maA)
    header
      h1
        color: red
        font-size: 30px
        font-family: "pacifico"
      h2 
        color: white
        font-size: 15px  
    div
      text-align: right 
      color: #00FFE2 
      font-size: 10px  
  
 @media (max-width: 460px) 
  section
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_RPKz4zB6oPeoU8SVN35ev9GjkpN6vtX9fiVDmZS2OOO-Ru_maA)
    header
      h1
        color: red
        font-size: 30px
        font-family: "cursive"
      h2 
        color: white
        font-size: 15px   
    div
      color: blue 
      font-size: 10px  
 @media (max-width: 760px) 
  section
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_RPKz4zB6oPeoU8SVN35ev9GjkpN6vtX9fiVDmZS2OOO-Ru_maA)
    header     
      h1
        color: red
        font-size: 30px
      h2 
        color: white
        font-size: 15px       
    div
      text-align: right 
      color: yellow
      font-size: 10px           
</style>
