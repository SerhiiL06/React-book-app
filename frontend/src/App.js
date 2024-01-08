import './App.css';
import BookList from "./components/BookList/BookList"
import BookForm from "./components/BookForm/BookForm"
// import Filter from "./components/BookFilter/Filter"


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Hello from react</h1>
        <main className="app-main">
          <div className="app-left-column">
            <BookForm/>
          </div>
          <div className="app-right-column">
            {/* <Filter /> */}
            <BookList/>
          </div>
        </main>
      </header>

    </div>
  );
}

export default App;
