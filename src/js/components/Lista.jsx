import React, { useEffect, useState } from "react";
export const Lista = () => {

    const [lista, setLista] = useState([]);
    const [tarea, setTarea] = useState('');

    const handleSubmit = (nuevaTarea) => {
        nuevaTarea.preventDefault();
        setLista([...lista, tarea])
        setTarea('');
    }
    const handleClick = (index) => {
        let aux = lista.filter((el, i) => i != index)
        setLista(aux)
    }


    return (
        <div className="container mt-3">
            <ul className="list-group mb-3">
                <li className="mb-2" >
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            placeholder={lista.length === 0 ? "No hay tareas" : "Añadir tarea"}
                            value={tarea}
                            className="lista form-control"
                            onChange={e => setTarea(e.target.value)} />
                        <input type="submit" hidden />
                    </form>
                </li>

                {lista.map((el, i) => <li className="tarea list-group-item d-flex justify-content-between p-2" key={i}> {el}
                    <span className="iconoBasura" onClick={() => handleClick(i)}><i className="fa-solid fa-trash"></i></span></li>)}


                <li className="list-group-item text-muted small">
                    {lista.length} {lista.length === 1 ? "tarea pendiente" : "tareas pendientes"} </li>
            </ul>
        </div>
    )
}