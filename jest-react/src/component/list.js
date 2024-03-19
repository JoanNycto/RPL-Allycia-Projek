import React from 'react';

function list({ list }){
    const { id, name, bachelor } = list;
    const h1 = <h1>{name}</h1>;
    const text = bachelor ? <strike>{h1}</strike> : h1;
    return <div data-testid={`todo-${id}`}>{ text }</div>;
}

export default list;