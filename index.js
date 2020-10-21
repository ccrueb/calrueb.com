console.log("this is working");

var options = {
  strings: [
    "welcome to my ^500 website.",
    "welcome to my ^500 blog.",
    "welcome to ^500 CalRueb.com"
  ],
  smartBackspace: true,
  backSpeed: 80,
  typeSpeed: 60,
  showCursor: false
};

var typed = new Typed(".element", options);
