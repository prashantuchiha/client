// import logo from './logo.svg';
import './App.css';

function App() {
  const [uniqueId,setuniqueId]=useState('');
  const [Name,setName]=useState('');
  const [Age,setAge]=useState(0);
  const [Data,setData]=useState([]);
  return (
    <div className="App">
      <h1>CRUD App with MERN</h1>
      <label>ID </label>
      <input type='String'></input>
      <label>Name</label>
      <input type='String'></input>
      
      <label>Age</label>
      <input type='number'></input>
      
      <label>Team</label>
      <input type='String'></input>
      <button>Add</button>
    </div>
  );
}

export default App;
