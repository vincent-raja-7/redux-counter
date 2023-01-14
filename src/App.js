import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, 
         increaseAmount, 
         increment } from './redux/slices/CounterSlice';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state)=> state?.counter)
  return (
   <>
   <div className="App">
   <h1>Counter:{counter?.value}</h1>
   <button onClick={()=>dispatch(increment())}>+</button>
   <br/>
   <button onClick={()=>dispatch(decrement())}>-</button>
   <br/>
   <button onClick={()=>dispatch(increaseAmount(20))}>Increase Amount</button>
   </div>
   </>
  );
}

export default App;
