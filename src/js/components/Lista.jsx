import React, { useEffect, useState } from "react";
export const Lista = () => {
    
    const [lista, setLista] = useState([]);
    const [tarea, setTarea] = useState('');
     useEffect(() => { 
        if (lista.length == 0) setLista([{ tarea: 'Empieza tu lista de tarea', id: Math.floor(Math.random() * 99999999)}]);
    }, []) 
    const handleSubmit = e => {
        e.preventDefault();
        setLista([...lista, { tarea, id: Math.floor(Math.random() * 99999999) }])
        tarea('');
    }
    const handleClick = (id) => {
        let aux = lista.filter((el,i)=> el.id!=id)
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
       {lista.map((el, i) => <li className="lista d-flex justify-content-between p-1" key={i}> {el.tarea} <span  onClick={() => handleClick(el.id)}><i className="fa-solid fa-trash"></i></span></li>)}
       <footer className="border border-secondary">{lista.length} items left</footer>
    </ul>
    </div>
    )
}