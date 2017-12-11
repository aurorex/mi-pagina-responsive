window.addEventListener('load', function() {
  var icon = document.getElementById('icon');
  var cont = 0;
  icon.addEventListener('click', function(event) {
    var menu = document.getElementById('ul-list');
    if (cont = 1) {
      menu.setAttribute('class', 'ul-display');
    } else {
      menu.removeAttribute('class', 'ul-display');
    }  
  });

})