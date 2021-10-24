import React, {createContext, useState} from "react";

export const CustomContext = createContext();
// CustomContext наследует два ключа: Consumer and Provider

const Context = (props) => {
    const [books, setBooks] = useState([
        {id: 1, title: 'book1'},
        {id: 2, title: 'book2'},
        {id: 3, title: 'book3'},
    ]);

    const addBook = (book) => {
        setBooks([
            book,
            ...books,
        ]);
    };

    const removeBook = (id) => {
        setBooks(books.filter(item => item.id !== id));
    };

    const valueList = {
        books,
        addBook,
        removeBook
    };

    return(
        // В CustomContext.Provider мы передаем объект VALUE, свормированный выше
        //  props.children все дочерние компоненты CustomContext. Эти компоненты мы перечислим на уровне APP
        <CustomContext.Provider value={valueList}>
            {props.children}
        </CustomContext.Provider>
        // <div>
        //     <h2>useContext</h2>
        //     <br/>
        //     <br/>
        //     <br/>
        //     <hr/>
        // </div>
    )
};

export default Context;