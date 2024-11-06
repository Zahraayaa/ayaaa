// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  // Get all elements with class="menu" and hide them
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  // Get all elements with class="tablink" and remove the class "w3-dark-grey"
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  // Show the current menu and add "w3-dark-grey" class to the clicked tab
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}

// Trigger the first tab (Ice Cream Cone) to display by default when the page loads
document.getElementById("myLink").click();
