

var btnLeft = document.getElementById('moveLeft')
   
var btnRight = document.getElementById('moveRight')

var block = document.getElementById('block')

var character = document.getElementById('character')
 
 var score = document.getElementById('scoreCounting')
 
 var scoreInner = document.getElementById('scoreInner')
 
 var controlsbtn = document.getElementById('controls')
 
 var startOver = document.getElementById("startOver")
 
 var share = document.getElementById('share')
 let Url = location.href;
 let count = 0
  
   // share with friends
    share.onclick = () =>{
      open('whatsapp://send?text=' + 'Don\'t get hitted by the the Box' +  '\n' + " " + Url)
    }
  
  // score counter
 var interval = setInterval(function(){
   count++
   score.innerHTML = count;
   if(count == 50){
     block.style.animation = "anim .9s infinite"
   }else if(count == 100){
     block.style.animation = "anim .7s infinite"
   }
 },500)
   //  score counter end

// random position with the block 
 block.addEventListener("animationiteration",() =>{
   var random = Math.floor(Math.random()*3)
   left = random * 90
   block.style.left = left + 'px'
 })
// end of random position with the block 

 // button moving character to the right
  function moveRight()
  {
    let right = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
    right += 90
    if(right < 270){
      character.style.left = right + 'px'
    }
  }
 btnRight.addEventListener('click',event =>{
   if(btnRight.click){
     moveRight()
       
   }
 
 })
  // end of button moving character to the right


     // button moving character to the left
  function moveLeft()
  {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
    left -= 90
    if(left>=0){
      character.style.left = left + 'px'
    }
  }
 btnLeft.addEventListener('click',event =>{
   if(btnLeft.click){
     moveLeft()
   }
 })
    
    // check dead 
    setInterval(function(){
      var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('left'))
      var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'))
      var blockLeft =parseInt(window.getComputedStyle(block).getPropertyValue('left'))
       if(characterTop == blockLeft && blockTop < 350 && blockTop > 270){
         controlsbtn.style.display = 'none'
           startOver.style.display = 'block'
            block.style.animation = "none"
         scoreInner.innerHTML = "Game over score : " + count
         clearInterval(interval)
        navigator.vibrate(20)
       }
       
    })