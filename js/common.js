window.addEventListener('load', function() {
    if( !sessionStorage.getItem('disp_popup') ) {
        sessionStorage.setItem('disp_popup', 'on');
        var popup = document.getElementsByClassName('popup-wrap');
        popup[0].classList.add('active');
        popup[0].onclick = function() {
            popup[0].classList.remove('active');
        }
    }
}, false);

