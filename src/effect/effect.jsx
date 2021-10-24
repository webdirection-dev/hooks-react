import React, {useEffect} from "react";

// псевдокод
// import somePlugin from 'plugin';

const Effect = () => {
    // useEffect - это ассинхронный хук!

    // можно помечать в комментариях для чего этот useEffect, например componentDidMount
    useEffect(() => {
        const handler = (event) => console.log(event.target);
        document.addEventListener('click', handler);

        return () => document.removeEventListener('click', handler);
    }, []);

    // а можно использовать именованную функцию
    useEffect(function componentDidMountForSomePlugin() {
        // somePlugin.init();
        console.log('useEffect: somePlugin initial')

        // return () => {somePlugin.destroy}
    }, []);

    return(
        <div>
            <h2>useEffect</h2>
            <br/>
            <br/>
            <br/>
            <hr/>
        </div>
    )
};

export default Effect;