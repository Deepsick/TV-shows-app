import React from "react";

const goToTopButton = () => {
    // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.querySelector(".GoToTopButton").style.display = "block";
  } else {
    document.querySelector(".GoToTopButton").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  return (
    <button className='GoToTopButton' onClick={topFunction} title="Go to top">
      Top
    </button>
  );
};

export default goToTopButton;
