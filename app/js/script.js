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


const buttons = document.querySelectorAll('.button');
const designItems = document.querySelectorAll('.design-item');

buttons[0].classList.add('active');
designItems[0].classList.add('active');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const index = button.dataset.index;

    // Remove a classe 'active' de todos os botões e designs
    buttons.forEach(btn => btn.classList.remove('active'));
    designItems.forEach(item => item.classList.remove('active'));

    // Adiciona a classe 'active' apenas ao botão e design correspondentes
    button.classList.add('active');
    designItems[index - 1].classList.add('active');
  });
});



const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion)); 