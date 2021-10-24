import React, {useReducer} from "react";
import './myReduser.css';

// Концепция хука useReducer пришла из библиотеки Redux

const limitRGB = num => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_R':
            return {
                ...state,
                r: limitRGB(state.r + step)
            };

        case 'DECREMENT_R':
            return {
                ...state,
                r: limitRGB(state.r - step)
            };

        case 'INCREMENT_G':
            return {
                ...state,
                g: limitRGB(state.g + step)
            };

        case 'DECREMENT_G':
            return {
                ...state,
                g: limitRGB(state.g - step)
            };

        case 'INCREMENT_B':
            return {
                ...state,
                b: limitRGB(state.b + step)
            };

        case 'DECREMENT_B':
            return {
                ...state,
                b: limitRGB(state.b - step)
            };

        default:
            return state;
    }
};

const MyReducer = () => {
    // Хук useReducer возвращает 2 сущности:
    // 1. {r, g, b} деструктурированное состояние по умолчанию, часто это объект
    // 2. dispatch/диспечер - функция обновления состояния, название функции может быть любым, но общепринято dispatch
    const [{r, g, b}, dispatch] = useReducer(reducer, {r: 0, g: 150, b: 200});

    // dispatch({type: 'DECREMENT_R', payload: 1}) где {type: 'DECREMENT_R'} - ACTION, и payload: 1 - это доп. данные
    return(
        <div>
            <h2>useReducer</h2>
            <div>
                <h1
                    style={
                        {
                            color: `rgb(${r}, ${g}, ${b})`
                        }
                    }
                >
                    Hello from Reducer!
                </h1>
                <div className='reducer'>
                    <div className='reducer__content'>
                        <span>r: {r}</span>
                        <div className='reducer__button'>
                            <button onClick={() => dispatch({type: 'DECREMENT_R', payload: 1})}>-</button>
                            <button onClick={() => dispatch({type: 'INCREMENT_R'})}>+</button>
                        </div>
                    </div>

                    <div className='reducer__content'>
                        <span>g: {g}</span>
                        <div className='reducer__button'>
                            <button onClick={() => dispatch({type: 'DECREMENT_G'})}>-</button>
                            <button onClick={() => dispatch({type: 'INCREMENT_G'})}>+</button>
                        </div>
                    </div>

                    <div className='reducer__content'>
                        <span>b: {b}</span>
                        <div className='reducer__button'>
                            <button onClick={() => dispatch({type: 'DECREMENT_B'})}>-</button>
                            <button onClick={() => dispatch({type: 'INCREMENT_B'})}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <hr/>
        </div>
    )
};

export default MyReducer;