import State from "../state";
import Effect from "../effect";
import Context from "../context";
import LayoutEffect from "../layoutEffect";
import Callback from "../callback";
import Reducer from "../myReducer";
import {MyUsePrevious} from "../useHooks";

import Books from "../books";

export default function App() {
    // Context  - Контекст или общий STATE для всех дочерних компонентов

    return (
        <>
            <State />
            <Effect />

            <Context>
                <Books />
            </Context>

            <LayoutEffect />
            <Callback />
            <Reducer />

            <MyUsePrevious />
        </>
    );
}