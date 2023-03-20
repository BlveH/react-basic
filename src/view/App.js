import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Example/Todos/ListTodo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with BLUE!
        </p>

        {/* <MyComponent /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
