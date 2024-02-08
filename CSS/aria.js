var myBtn = document.getElementById('add_me');

myBtn.addEventListener('click', function ( e ) {
  /* toggle the pressed state of the button based on
     whatever the current value is */
  myBtn.setAttribute('aria-pressed', e.target.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
});