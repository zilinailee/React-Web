
function App() {
  return (

    /*<script>
      document.addEventListener("DOMContentLoaded", function(event) {
      var links = document.querySelectorAll('a');
      var baseUri = 'exp://wg-qka.notbrent.app.exp.direct';
      // Take the uri from the params
      var qs = decodeURIComponent(document.location.search);
      if (qs) {
      baseUri = qs.split('?linkingUri=')[1];
      }
      // Update the link urls
      for (var i = 0; i < links.length; ++i) {
      links[i].href = links[i].href.replace('exp://REPLACE_ME/', baseUri);
      console.log(links[i].href);
      }
      var redirectInterval = setInterval(function() {
      var countdown = document.querySelector('.countdown');
      var t = parseInt(countdown.innerText, 10);
      t -= 1;
      countdown.innerText = t;
      if (t === 0) {
      clearInterval(redirectInterval);
      window.location.href = baseUri + 'message=' + encodeURIComponent('Redirected automatically by timer');
      }
      }, 1000);
      });
    </script>*/

    <div>
      <h1>Hello</h1>
      <a href="exp://192.168.68.114:19000/--/dashboard?message=chanzilin">
            Pass back authToken2
      </a>
    </div>
  );
}

export default App;
