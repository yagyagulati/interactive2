
let fourty7 = document.querySelector('.fourty7')

fourty7.addEventListener('click',function(){
   fourty7.classList.add('clock1');
   setTimeout(function(){
    fourty7.classList.remove('clock1')  
  },1000)
})