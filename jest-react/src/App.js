import './App.css';
import Todo from './component/UT_Helper-Allycia';
import List from './component/list';

function App() {
  const todo = [
    { id: 1, title: 'wash dishes', completed: false, },
    { id: 2, title: 'make dinner', completed: true},
  ];

  const list = [
    { id: 100, name: 'allycia', bachelor: true, },
    { id: 800, name: 'alexa', bachelor: false, },
  ];

  return (
    <div className="App">
      {
        todo.map((todo) => {
          return (<Todo todo ={todo}/>)
        })
      }
    </div>
  );
}

export default App;
