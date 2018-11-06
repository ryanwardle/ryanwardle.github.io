//TOGGLE MOBILE NAV

function toggleMobileNav(){

  const mobileIconMenu = document.getElementById('icon-menu');
  const mobileIconCross = document.getElementById('icon-cross');
  const navList = document.getElementById('nav-list');

  mobileIconMenu.addEventListener('click', function(){
    if(mobileIconMenu.style.display = 'block'){
      mobileIconMenu.style.display = 'none';
      mobileIconCross.style.display = 'block';
      navList.classList.add('mobile-nav');
    }
  });

  mobileIconCross.addEventListener('click', function(){
    if(mobileIconCross.style.display = 'block'){
      mobileIconCross.style.display = 'none';
      mobileIconMenu.style.display = 'block';
      navList.classList.remove('mobile-nav');
    }
  });
}

toggleMobileNav();



//FORM VALIDATION

function validateForm(){

  const name = document.getElementById('name');

  if(name.value === '' || name.match(/\d/)){
    alret('You must enter a valid name')
  }
}

const submit = document.getElementById('submit');

submit.addEventListener('click', function(){
  validateForm();
});
