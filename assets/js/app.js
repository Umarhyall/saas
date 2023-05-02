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
