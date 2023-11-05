// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav_toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
  //console.log(links.classList);
  //console.log(links.classList.contains("random"));
  //console.log(links.classList.contains("links"));

  // one way is below, add or remove class
  //if(links.classList.contains('show-links')) {
  //links.classList.remove('show-links');
  //} else {
  //links.classList.add('show-links');
  //}

  //another way is to toggle a class
  links.classList.toggle('show-links');
});
