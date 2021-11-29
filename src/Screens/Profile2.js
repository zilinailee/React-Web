import React, { useEffect, useState } from 'react';

function App() {

  const [msg, setMsg] = useState('');

  useEffect(() => {
    document.addEventListener("message", event => {
      setMsg(event.data)
    });
    window.addEventListener("message", event => {
      setMsg(event.data)
    });
  }, []);

  return (
    <div>
        <div>Web: {msg}</div>

        <button
          onClick={() => {
            window.ReactNativeWebview.postMessage(
              "Post message from web to Mobile",
              "*"
            );
          }}
        >
          Send Message To React Native(Mobile)
        </button>
      </div>
  );
}

export default App;
