import logo from './logo.svg';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterHook from './components/CounterHook';
import ShowHook from './components/ShowHook';
import LifeCycleClass from './components/LifeCycleClass';
import LifeCycleHook from './components/LifeCycleHook';

function App() {
  return (
    <div className="App">
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}
      {/* <ShowHook /> */}
      <LifeCycleClass />
      {/* <LifeCycleHook /> */}
    </div>
  );
}

export default App;
