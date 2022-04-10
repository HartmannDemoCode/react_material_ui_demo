import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonTester from './components/mat_ui';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <ButtonTester/>
    </div>
  )
}

export default App
