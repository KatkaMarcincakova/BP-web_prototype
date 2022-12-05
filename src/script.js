function makeActive(id, page) {
    if (page == 'login.html')
        window.location.href = page;

    var btns = document.getElementsByClassName('navbuttons');
    console.log(btns)
    for (var i = 0; i < btns.length; i++) {
        if ($(btns[i]).hasClass('btn-nav-active')) {
            $(btns[i]).removeClass('btn-nav-active');
        }
    }
    $(id).addClass('btn-nav-active');
}