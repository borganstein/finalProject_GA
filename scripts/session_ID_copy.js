function copysessionIDfunction() {
    navigator.clipboard.writeText('05577626bd543fbd9cc17239cdaf1e6c6e402e4f3ef4eb964b72f3c851f1d91c30')
    var tooltip = document.getElementById("session-id");
    tooltip.innerHTML = "Copied!";
}
 

/* --------------------------------------*/
function outFunc() {
  var tooltip = document.getElementById("session-id");
  tooltip.innerHTML = "Copy to clipboard";
}