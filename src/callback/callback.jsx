import React from "react";

// useCallback(fn, deps) эквивалентен useMemo(() => fn, deps)
//useCallback() не вызывает вложенную функцию, а просто ее ВОЗВРАЩАЕТ
//useMemo() ВЫПОЛНЯЕТ вложенную функцию, а не возвращает ее

// useMemo полезен если нужно произвести ресурсозатранный расчет
// useMemo сделает будет хранить результат до следующего изменения зависимостей, а не пересчитыват их при каждом рендере

const Callback = () => {
    return(
        <div>
            <h2>useCallback and useMemo</h2>
            <br/>
            <br/>
            <br/>
            <hr/>
        </div>
    )
};

export default Callback;