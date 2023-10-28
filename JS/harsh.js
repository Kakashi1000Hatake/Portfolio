// for auto typing
var typed = new Typed(".autoType", {
  strings: ["Harsh Lakhanpal", "Web Developer", "Sleeping"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// for mouse move background
var follow = document.querySelector(".follow");

var body = document.querySelector(".fullDiv");

body.addEventListener("mousemove", function (dets) {
  follow.style.visibility = "visible";
  const height = follow.offsetHeight;
  const width = follow.offsetWidth;

  setTimeout(() => {
    follow.style.top = `${dets.pageY - height / 2}px`;
    follow.style.left = `${dets.pageX - width / 2}px`;
  }, 20);

  // body.style.backgroundColor = "red"
});

body.addEventListener("mouseleave", function () {
  follow.style.visibility = "hidden";
});

// pdf print

document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the PDF link element
  var pdfLink = document.getElementById(".pdfLink");

  // Add a click event listener to the link
  pdfLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior (navigating to the PDF file)

    // Open the PDF in a new window or tab
    var pdfUrl = pdfLink.getAttribute("href");
    // window.open(pdfUrl, "_blank");
  });
});
