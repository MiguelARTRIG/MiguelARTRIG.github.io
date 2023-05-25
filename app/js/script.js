const menu_button = document.querySelector('.menu_button');
const sidebar = document.querySelector('.sidebar');
const xclick = document.querySelector('#xclick');
const hamburger = document.querySelector('.header_toggle');
const MobileMen = document.querySelector('.mobile_menu');

hamburger.addEventListener('click', function(){
   if(hamburger.classList.contains('open')){
        hamburger.classList.remove('open');
        MobileMen.classList.remove('ShowMenu');
    }
 else{
       hamburger.classList.add('open');
       MobileMen.classList.add('ShowMenu');
   }
})

menu_button.addEventListener('click', function(){
    console.log('click me bitch');

        sidebar.classList.add('open')
    
});

xclick.addEventListener('click', function(){
    console.log('clicked X');
    
        sidebar.classList.remove('open');
    
  

})