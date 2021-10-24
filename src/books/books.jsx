import React, {useContext} from "react";
import Book from "../book";
import {CustomContext} from "../context/context";

// useContext - для подключения к пропсам, ранее созданного контекста <Context />
// CustomContext - необходимая дополнительная именованная зависимость
// именновыанных зависимостей(контекстов) может быть сколько угодно

const Books = () => {
    // деструктурируем пропсы из <Context />
    const {books = []} = useContext(CustomContext);

    return(
        <div>
            <h2>useLayoutEffect</h2>
            <div className='books'>
                <h2>Books</h2>
                {
                    books.map(item => {
                        const id = item.id;
                        return <Book key={id} {...item}/>
                    })
                }
            </div>
            <br/>
            <br/>
            <br/>
            <hr/>
        </div>
    )
};
export default Books;