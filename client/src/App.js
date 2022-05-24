import { useEffect, useState } from 'react'

function App() {
  const [ apiResponse, setApiResponse ] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/swapi/character')
      .then(response => response.json())
      .then(data => setApiResponse(data));
  }, [])

  return (
    <div className="App">
        <h1>Hello from React</h1>
        <p>This content is static</p>
        <h3>This content is served from an express server</h3>
        {!apiResponse && <pre>Loading...</pre>}
        <pre>{ apiResponse && JSON.stringify(apiResponse, null, 2) }</pre>
    </div>
  );
}

export default App;
