function openDialog(event) {
    event.preventDefault();
    alert("由于一些不可抗力因素?,你可能打不开Github或者Discord,那么这时候你可以使用一个老牌开源项目Steam++ 也叫 Watt Toolkit,如果不懂的话可以在B站或百度搜索Steam++这是官网地址:https://steampp.net/");
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
