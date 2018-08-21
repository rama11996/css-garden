<template>
  <section>
    <div class="benefits" role="article">
			<h3>Benefits</h3>
			<p>Why participate? For recognition, inspiration, and a resource we can all refer to showing people how amazing <abbr title="Cascading Style Sheets">CSS</abbr> really can be. This site serves as equal parts inspiration for those working on the web today, learning tool for those who will be tomorrow, and gallery of future techniques we can all look forward to.</p>
		</div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJlcngcKcScBo5NSSnwqpM4jvsLFgfi5Qek1a90iRkssjd30z" alt="">
  </section>
</template>
<style lang="sass" scoped>
@media (min-width: 750px)
  section
    margin-left: 7rem
    margin-right: 7rem
    display: flex
    color: white
    img
      margin-top: 10px
      height: 250px
      width: 300px
    div
      margin-top: 5rem
      h3
        color: Yellow 
@media (max-width: 530px)
  section
    color: white
    display: flex
    flex-direction: column-reverse
    img
      height: 300px
      width: 310px
      margin-top: 2rem
    div
      h3
        color: Yellow   
@media (max-width: 750px)  
  section
    display: flex  
    color: white
    img
      height: 300px
    div
      h3
        color: Yellow 
     
</style>



