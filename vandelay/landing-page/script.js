function enableStickyNav() {

  const nav = document.getElementById('nav-bar');
  const topOfNav = nav.offsetTop;
  function fixNav() {

    if(window.scrollY >= 200){
      document.body.classList.add('fixed-nav');
    }else{
      document.body.classList.remove('fixed-nav');
    }
  }

  window.addEventListener('scroll', fixNav);
}

enableStickyNav();



//MOBILE-NAV CLICK EVENT

const mobileIcon = document.getElementById('mobile-nav-icon');

mobileIcon.addEventListener('click', function() {

    if(mobileIcon.classList.contains('fa-bars')){
      mobileIcon.classList.remove('fa-bars');
      mobileIcon.classList.add('fa-times');
      document.getElementById('nav-list').style.display = 'block';
      document.getElementById('header-img').style.display = 'none';
    }else if (mobileIcon.classList.contains('fa-times')) {
      mobileIcon.classList.remove('fa-times');
      mobileIcon.classList.add('fa-bars');
      document.getElementById('nav-list').style.display = 'none';
      document.getElementById('header-img').style.dislay = 'block';
    }

});


//SMOOTH SCROLLING SNIPPET

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
        return false;
      }
    }
  });
});




//SUBMIT BUTTON

const submit = document.getElementById('submit');
const email = document.getElementById('email').value;
submit.addEventListener('click', function(){
  alert(`Thank you. We have sent a confirmation email to ${email}`);
});
