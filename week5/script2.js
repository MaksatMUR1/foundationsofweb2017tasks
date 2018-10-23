<!DOCTYPE html>
<html>
var bigIm = document.getElementById("bigImage");
var carousel = document.getElementById('carousel').getElementsByTagName('img');

for(var i = 0; i<carousel.length; i++){
    carousel[i].addEventListener('click',changeImage);
}

function changeImage(){
    var src = this.getAttribute('src');
    bigIm.innerHTML = "<img src=" + src + ">";
}

  <head>
    <link rel="stylesheet" href="style3.css">
    <script src="script3.js" defer></script>
  </head>

  <body>
    <div>
      <table id="students" border="1" cellpadding="0" cellspacing="0">
        <tr><td>John</td><td>Samuel</td><td><strong>Engineering</strong></td></tr>
        <tr><td>Sam</td><td>Micheal</td><td><strong>Engineering</strong></td></tr>
        <tr><td>Tim</td><td>Bernes</td><td><strong>Philology</strong></td></tr>
      </table>
      <br/>
      <br/>
      <input id="name" type="text" placeholder="Enter your name"/><br/>
      <input id="surname" type="text" placeholder="Enter your surname"/><br/>
      <select id="faculty">
        <option value="-1">Select Faculty</option>
        <option>Philology</option>
        <option>Engineering</option>
        <option>Economy</option>
        <option>Law</option>
      </select><br/>
      <button id="addStudent">Add Student</button>
      
    </div>
  </body>

</html>
