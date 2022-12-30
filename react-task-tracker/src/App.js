import React from 'react'
import Header from './components/Header'

function App() {
  const name = 'Tony';
  return (
    <div className="app">
      {/* <h1>Hello from React</h1>
      <h2>Hello {name}</h2> */}
      <Header />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from class methods</h1>
//   }
// }

export default App;
