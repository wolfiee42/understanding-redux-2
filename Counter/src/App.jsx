import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { decrement, increment } from "../features/counters2/counterSlice2"
import Post23 from "./components/Post23";

export default function App() {

  const counters2 = useSelector((state) => state.counters)
  const dispatch = useDispatch();

  const totalCount = counters2.reduce(
    (sum, current) => sum + current.value, 0
  )

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  }

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  }

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application</h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {counters2.map((counter) => (
          <Counter
            key={counter?.id}
            count={counter?.value}
            onIncrement={() => handleIncrement(counter?.id)}
            onDecrement={() => handleDecrement(counter?.id)}
          />
        ))}
        <Stats totalCount={totalCount} />
        <Post23 />
      </div>
    </div>
  )
}