Aya's Cream (HTML)
<!DOCTYPE html>
<html>
  <head>
    <title>aya's cream</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata">
  </head>
<body>

<!-- Menu -->
<div class="w3-top">
  <div class="w3-row w3-padding w3-black">
    <div class="w3-col s3">
      <a href="#" class="w3-button w3-block w3-black">HOME</a>
    </div>
    <div class="w3-col s3">
      <a href="#about" class="w3-button w3-block w3-black">ABOUT</a>
    </div>
    <div class="w3-col s3">
      <a href="#menu" class="w3-button w3-block w3-black">MENU</a>
    </div>
    <div class="w3-col s3">
      <a href="#where" class="w3-button w3-block w3-black">WHERE</a>
    </div>
  </div>
</div>

<!-- About Container -->
<div class="w3-container" id="about">
  <div class="w3-content" style="max-width:700px">
    <h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide">ABOUT AYA'S CREAM</span></h5>
    <p>"Selamat datang di Aya's Cream! Nikmati varian rasa es krim kami"</p>
    <p>"Nikmati es krim segar dan berkualitas setiap hari!"</p>
  </div>
</div>

<!-- Menu Container -->
<div class="w3-container" id="menu">
  <div class="w3-content" style="max-width:700px">
    <h5 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">THE MENU</span></h5>
    <div class="w3-row w3-center w3-card w3-padding">
      <a href="#" onclick="openMenu(event, 'Ice Cream Cone');">
        <div class="w3-col s6 tablink">Ice Cream Cone</div>
      </a>
      <a href="#" onclick="openMenu(event, 'Ice Cream Cup');">
        <div class="w3-col s6 tablink">Ice Cream Cup</div>
      </a>
    </div>
    <div id="Ice Cream Cone" class="w3-container menu w3-padding-48 w3-card">
      <h5>Strawberry</h5>
      <p class="w3-text-grey">Rp. 10.000</p><br>
    </div>
    <div id="Ice Cream Cup" class="w3-container menu w3-padding-48 w3-card">
      <h5>Strawberry</h5>
      <p class="w3-text-grey">Rp. 15.00</p><br>
    </div>
  </div>
</div>

<!-- Footer -->
<footer class="w3-center w3-light-grey w3-padding-48 w3-large">
  <p>This website was made with W3schools Spaces. Make your own free website today!</p>
  <a class="w3-button w3-round-xxlarge w3-dark-grey w3-margin-bottom" href="https://www.w3schools.com/spaces" target="_blank">Start now</a>
</footer>

</body>
</html>
