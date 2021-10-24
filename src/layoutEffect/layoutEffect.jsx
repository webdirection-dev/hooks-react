// useLayoutEffect похож на useEffect и делает тоже самое, но используется редко
// Особенность useLayoutEffect: useEffect - асинхронен, useLayoutEffect - синхронный хук
// useEffect используется в 99% случаев

const LayoutEffect = () => {
    return(
        <div>
            <h2>useLayoutEffect</h2>
            <br/>
            <br/>
            <br/>
            <hr/>
        </div>
    )
};

export default LayoutEffect;