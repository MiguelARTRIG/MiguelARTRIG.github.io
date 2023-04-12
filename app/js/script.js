
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.main_header');
    const itemlist = document.querySelectorAll('.item_list');
    const logo = document.querySelector('#medite');
    const tpontos = document.querySelector('#trespontos');
    const button = document.querySelector('.button_1');
  
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scroll');
      logo.classList.add('medite_js');
      button.classList.add('button_js');
      tpontos.classList.add('trespontos_js')
      itemlist.forEach(function(element) {
        element.classList.add('item_listjs');
      });
    } else {
      navbar.classList.remove('navbar-scroll');
      logo.classList.remove('medite_js');
      button.classList.remove('button_js');
      tpontos.classList.remove('trespontos_js')
      itemlist.forEach(function(element) {
        element.classList.remove('item_listjs');
      });
    }
  });