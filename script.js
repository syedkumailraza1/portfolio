function showAlert() {
    alert("Humpe To Haiye Na");
}

function openInstagram() {
    
    var instagramURL = "https://www.instagram.com/its_kumailrazas/";
    window.open(instagramURL, '_blank');
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("name").style.padding = "30px 10px";
  } 
}