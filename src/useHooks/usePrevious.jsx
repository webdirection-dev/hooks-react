import React, {useState} from "react";

const UsePrevious = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>useHooks</h2>
            <button
                onClick={() => setCount(count + 1)}
            >Update</button>
            <h3>{count}</h3>
            <h3>prevCount:</h3>
            <br/>
            <br/>
            <br/>
            <hr/>
        </div>
    )
};

export {UsePrevious};