javascript:(function() {
  var scriptElement = document.createElement('script');
  var sourceUrl = 'https://cdn.jsdelivr.net/gh/yeahbread/Ego-Menu-Bookmarklets/Menu.js';
  fetch(sourceUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(sourceCode => {
      scriptElement.text = sourceCode;
      document.body.appendChild(scriptElement);
    })
    .catch(error => {
      alert('Error fetching script: ' + error.message);
      console.error('Error fetching script:', error);
    });
})();
