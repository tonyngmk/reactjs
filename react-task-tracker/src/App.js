import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor's appointment",
        date: '2023-02-05',
        reminder: true
    },
    {
        id: 2,
        text: "Parent-teacher conference",
        date: '2023-02-06',
        reminder: true
    },
    {
        id: 3,
        text: "Shopping with wife",
        date: '2023-02-07',
        reminder: false
    },
  ])

  return (
    <div className="app">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from class methods</h1>
//   }
// }

export default App;
