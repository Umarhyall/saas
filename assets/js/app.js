function showMembers(buttonIndex) {
  var memberBoxes = document.querySelectorAll(".member-box");
  for (var i = 0; i < memberBoxes.length; i++) {
    memberBoxes[i].style.display = "none";
  }

  var startIndex = (buttonIndex - 1) * 12;
  var endIndex = startIndex + 12;

  for (var i = startIndex; i < endIndex; i++) {
    if (memberBoxes[i]) {
      memberBoxes[i].style.display = "block";
    }
  }
}

$(document).ready(function () {
  $(".gallery-carousel").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
