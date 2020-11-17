let menu = document.querySelector('.mobile-menu')

menu.oclick = function() {
    if(menu.className === 'mobile-menu'){
        menu.className += ' open'
    } else {
        menu.className = 'mobile-menu'
    }
}