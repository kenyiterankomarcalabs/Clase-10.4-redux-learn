import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/counter.slice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
    </>
  );
}

export default App;
