function eventTimer() {
  var x = setInterval(function () {
    document.getElementById("cdtext").innerHTML = "EVENT IS NOW LIVE";
    // Set the date we're counting down to
    var countDownDate = new Date("march 19, 2022 22:00:00").getTime();

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("Day").innerHTML = days;
    document.getElementById("Hour").innerHTML = hours;
    document.getElementById("Min").innerHTML = minutes;
    document.getElementById("Sec").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("cdtext").innerHTML = "This Event has ended";
      document.getElementById("Day").innerHTML = "0";
      document.getElementById("Hour").innerHTML = "0";
      document.getElementById("Min").innerHTML = "0 ";
      document.getElementById("Sec").innerHTML = "0 ";
    }
  }, 1000);
}

// Set the date we're counting down to
var countDownDate = new Date("march 19, 2022 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("Day").innerHTML = days;
  document.getElementById("Hour").innerHTML = hours;
  document.getElementById("Min").innerHTML = minutes;
  document.getElementById("Sec").innerHTML = seconds;
  // If the count down is finished
  if (distance < 0) {
    eventTimer();
    clearInterval(x);
  }
}, 1000);

function teamdisplay() {
  var temp = `<div class="col-md-3">
  <div class="a-box">
  <div class="img-container">
    <div class="img-inner">
      <div class="inner-skew">
        <img src="assets/images/hackathonlogo.png">
      </div>
    </div>
  </div>
  <div class="text-container">
    <h3>My Name</h3>
    <div>
      My Description My Description My Description My Description My Description
  </div>  
  <div class="connectteam">
      <a href="#"><i class="fa fa-linkedin"></i></a>  
  </div>  
</div>
          </div>`;

  var output = document.getElementById("teamsdisplay");

  for (i = 0; i < 4; i++) {
    output.innerHTML += temp;
  }
}

function themesdisplay() {

  var out='';
  for(i=0;i<themesdata.length;i++){
      var temp = `<div class="col-lg-4 col-md-6 col-sm-12">
        <div class="team-item">
          <h3 class="themesheading">${themesdata[i]["name"]}</h3>
            <div class="team-content">
                <img src="${themesdata[i]["image"]}" alt="">
                <p>${themesdata[i]["description"]}</p>
            </div>
        </div>
      </div>`;

      out+=temp;
  }

  var output = document.getElementById("themesdisplay");
  output.innerHTML += out;
}

function judgesdisplay() {
  var temp = `<div class="col-lg-4 col-md-6 col-sm-12">
    <div class="team-item">
        <div class="team-content">            
            <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
            <div class="user-image">
                <img src="http://placehold.it/60x60" alt="">
            </div>
            <div class="team-info">
                <h3 class="user-name">Catherine Soft</h3>
                <span>Managing Director</span>
            </div>
        </div>
    </div>
</div>`;

  var output = document.getElementById("judgesdisplay");
  for (i = 0; i < 4; i++) {
    output.innerHTML += temp;
  }
}

function mentorsdisplay() {
  var temp = `<div class="col-lg-4 col-md-6 col-sm-12">
    <div class="team-item">
        <div class="team-content">            
            <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
            <div class="user-image">
                <img src="http://placehold.it/60x60" alt="">
            </div>
            <div class="team-info">
                <h3 class="user-name">Catherine Soft</h3>
                <span>Managing Director</span>
            </div>
        </div>
    </div>
</div>`;

  var output = document.getElementById("mentorsdisplay");
  for (i = 0; i < 4; i++) {
    output.innerHTML += temp;
  }
}


function showsponsors(){
  var temp=`<div class="col-lg-2 col-md-3 col-sm-6 col-6 ">
  <a href="#" class="mini-box">
      <i><img src="assets/images/work-process-item-01.png" alt=""></i>
      <strong>Get Ideas</strong>
      <span>Godard pabst prism fam cliche.</span>
  </a>
</div>`;

var output = document.getElementById("sponsorsdisplay");
  for (i = 0; i < 4; i++) {
    output.innerHTML += temp;
  }
}


function prizesdisplay(){
  var temp=` <div class="col-lg-4 col-md-6 col-sm-12 container-body" data-scroll-reveal="enter bottom move 50px over 0.3s after 0.3s">
  <div class = "prize-container">
      <div class = "card">
        <div class = "image">
          <img href = "#" src =" https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg">
        </div>
        <div class = "content">
          <h3>This is content</h3>
          <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
        </div>
      </div>    
    </div>    
</div>`;

var output = document.getElementById("prizesdisplay");
  for (i = 0; i < 4; i++) {
    output.innerHTML += temp;
  }
}

//call function
teamdisplay();
themesdisplay();
showsponsors();
judgesdisplay();
mentorsdisplay();
prizesdisplay();

