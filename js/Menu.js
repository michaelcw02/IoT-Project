
function loadPage() {
    loadMenu();
}

function loadMenu() {
    $('.menu').hide();
    setTimeout( () => $('.menu').fadeIn(), 1800);
}


$(loadPage);