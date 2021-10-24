import React, {useContext} from "react";
import {CustomContext} from "../context/context";

const Book = (props) => {
    const {removeBook} = useContext(CustomContext);
    return(
        <>
            <h5>{props.title}</h5>
            <button
                onClick={() => removeBook(props.id)}
            >
                del
            </button>
        </>
    )
};

export default Book;