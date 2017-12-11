window.addEventListener('load', function() {
    var icon = document.getElementById('icon');
    var cont = ''
    icon.addEventListener('click', function(event){
        var menu = document.getElementById('ul-list');
        
        if (cont.value = 1) {
            menu.setAttribute('class', 'ul-display');
        }
        else{
            menu.removeAttribute('class', 'ul-display');
        }
        
        
       
    })

})