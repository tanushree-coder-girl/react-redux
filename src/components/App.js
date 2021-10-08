import { useSelector, useDispatch } from "react-redux";
import { Inc, Dec, Mult, Div } from './../services/Actions/index'

function App() {
  const count = useSelector((state)=> state.startCounting);
  const number = useSelector((state)=> state.multiplyAndDivide);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>dispatch(Inc(5))}> Increament </button>
      <button onClick={()=>dispatch(Dec())}> Decreament </button>
      
      <h1> Multiplication and division </h1>
      <h2>{number}</h2>
      <button onClick={()=>dispatch(Mult(5))}> Multiplication </button>
      <button onClick={()=>dispatch(Div())}> Division </button>
    </div>
  );
}

export default App;
