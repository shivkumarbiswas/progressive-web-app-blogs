$(function() {
  $.get("https://api.github.com/users")
  .then(function(data) {
    var html = "";

    data.map(function(item) {
      html += "<div><h2>Login: " + item.login + "</h2><span>Url: " + item.url + "</span></div>"
    });
    
    $(".content").html(html);

    registerSW();
  });  
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}
