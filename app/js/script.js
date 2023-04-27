const menu_button = document.querySelector('.menu_button');
const sidebar = document.querySelector('.sidebar');
const xclick = document.querySelector('#xclick');



menu_button.addEventListener('click', function(){
    console.log('click me bitch');

        sidebar.classList.add('open')
    
});

xclick.addEventListener('click', function(){
    console.log('clicked X');
    
        sidebar.classList.remove('open');
    
  

})