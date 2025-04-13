import React, { useEffect, useState } from "react";
export const Lista = () => {
    
    const [lista, setLista] = useState([]);
    const [tarea, setTarea] = useState('');

    const handleSubmit =(nuevaTarea) => {
        nuevaTarea.preventDefault();
        setLista([...lista, tarea])
        setTarea('');
    }
    const handleClick = (index) => {
        let aux = lista.filter((el,i)=> i !=index)
        setLista(aux)
    }


return(
    <div>
    <ul className="p-0">
        <li className="lista " >
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe una tarea" value={tarea} onChange={e => setTarea(e.target.value)}  />
            <input type="submit" hidden />
        </form>
        </li>
       {lista.map((el, i) => <li className="lista d-flex justify-content-between p-1" key={i}> {el} <span  onClick={() => handleClick(i)}><i className="fa-solid fa-trash"></i></span></li>)}
       <footer className="border border-secondary">{lista.length} items left</footer>
    </ul>
    </div>
    )
}