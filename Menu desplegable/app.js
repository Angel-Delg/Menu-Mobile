( () => {
    const $menu = document.querySelector('.container__nav')
    const $menuBarr = document.querySelector('.container__icon')
    const $iconMenu = $menuBarr.querySelector('img')
    const $linksAll = document.querySelectorAll('.item-link')

    $menuBarr.addEventListener('click', () => {
        $menu.classList.toggle('container__nav-move')
        $menu.style.transition = '.3s'

        setTimeout(() => {
            if($iconMenu.getAttribute('src') === 'icons/menu-close.svg'){
                $iconMenu.removeAttribute('src')
                $iconMenu.setAttribute('src','icons/menu-barr.svg')
            }
            else{
                $iconMenu.removeAttribute('src')
                $iconMenu.style.transition = '.5s'
                $iconMenu.setAttribute('src','icons/menu-close.svg')
            }
        },300);
    });

    // Otro evento que despliege el menu  denuevo
    $linksAll.forEach( element => {
        element.addEventListener('click', () => {
            if($iconMenu.getAttribute('src') === 'icons/menu-close.svg'){
                $iconMenu.removeAttribute('src')
                $iconMenu.setAttribute('src','icons/menu-barr.svg')
            }
            else{
                $iconMenu.removeAttribute('src')
                $iconMenu.style.transition = '.5s'
                $iconMenu.setAttribute('src','icons/menu-close.svg')
            }
            $menu.classList.toggle('container__nav-move')
        })
    })
})();