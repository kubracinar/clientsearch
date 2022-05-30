
import Search from './components/Search';
import { data } from "./data/Data";

function App() {
  return (
    <div className="App">
      <Search clients={data} />
    </div>
  );
}

export default App;
