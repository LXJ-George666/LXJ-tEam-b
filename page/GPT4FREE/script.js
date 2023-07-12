function openDialog(event) {
    event.preventDefault();
    alert("\u7531\u4E8E\u4E00\u4E9B\u4E0D\u53EF\u6297\u529B\u56E0\u7D20\uD83D\uDE45,\u4F60\u53EF\u80FD\u6253\u4E0D\u5F00Github\u6216\u8005Discord,\u90A3\u4E48\u8FD9\u65F6\u5019\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u8001\u724C\u5F00\u6E90\u9879\u76EESteam++ \u4E5F\u53EB Watt Toolkit,\u5982\u679C\u4E0D\u61C2\u7684\u8BDD\u53EF\u4EE5\u5728B\u7AD9\u6216\u767E\u5EA6\u641C\u7D22Steam++\u8FD9\u662F\u5B98\u7F51\u5730\u5740:https://steampp.net/");
}


// JavaScript Document
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".btn-linkedin");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function copyToClipboard(elementId) {
  var copyText = document.querySelector(elementId).innerText;
  navigator.clipboard.writeText(copyText).then(function() {
    console.log('Copying to clipboard was successful!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
}
