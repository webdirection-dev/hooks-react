import React, {useState, useEffect} from "react";

const State = () => {
    // useState as callback
    const [value, setValue] = useState(() => {
        return 11;
    });

    // useState as classic state
    const [state, setState] = useState({
        count: 0,
        something: false
    });

    useEffect(() => {
        setValue((prevState) => {
            return prevState + 9
        });
    }, []);

    console.log(`useState-value: ${value}`);

    // useEffect(() => {
    //     // setState(state + 100)
    //     console.log(state.count)
    // }, [state]);

    const onChangeCont = () => {
        setState({
            // чтобы не удалять остальные ключи необходимо каждый раз прописать их вручную, например: ...state
            ...state,
            count: state.count += 100
        })
    };

    const onChangeSomething = () => {
        setState({
            ...state,
            something: !state.something
        })
    };

    console.log(state)

    return(
        <div>
            <h2>useState</h2>
            <button onClick={onChangeCont}>Click</button>
            <button onClick={onChangeSomething}>Me too</button>
            <br/>
            <br/>
            <br/>
            <hr/>
        </div>
    )
};

export default State;