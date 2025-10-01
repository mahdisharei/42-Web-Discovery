function generateColor() {
  const hexArray = "0123456789ABCDEF";
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code += hexArray[Math.floor(Math.random() * 16)];
  }
  return code;
}

$(document).ready(function() {
  $("#btn").on("click", function() {
    $("body").css("background-color", generateColor());
  });
});