import React, {useState, useRef, useEffect} from "react";

const MyUsePrevious = () => {
    const [count, setCount] = useState(0);


    const prevCount = usePrevious(count);

    return(
        <div>
            <h2>useHooks</h2>
            <button
                onClick={() => setCount(count + 1)}
            >Update</button>
            <h3>current: {count}</h3>
            <h3>prevCount: {prevCount}</h3>
            <br/>
            <br/>
            <br/>
            <hr/>
        </div>
    )
};

export {MyUsePrevious};

function usePrevious(value) {
    const ref = useRef(); // {current: null}
    useEffect(() => {
        ref.current = value;
    });

    return ref.current
}