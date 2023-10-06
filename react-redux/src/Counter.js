import {useSelector, useDispatch} from 'react-redux'
import { counterAction } from './Store/Counter';

export default function Counter() {

    const counter = useSelector((state)=> state.count.counter);
    console.log(counter)

    const dispatch = useDispatch();

    const add = () => {
        dispatch(counterAction.increment())
    }

    const calc = () => {
        dispatch(counterAction.calc({plus : 5, minus : -3}))
    }


    return (
        <>
            <h2>{counter}</h2>
            <button onClick={add}>ADD</button>
            <button onClick={()=>{dispatch(counterAction.decrement())}}>MIUNS</button>
            <button onClick={calc}>CALC</button>
        </>
    )
}