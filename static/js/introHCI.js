$(document).ready(function() {
    initializePage();
});

function initializePage() {
  $("a.thumbnail").click(projectClick);
    $('#testjs').click(function(e) {
            $('.jumbotron h1').text("Javascript is connected");
            });
}

function projectClick(e){
  e.preventDefault();
  $(this).css("background-color", "#7fff00");
}
