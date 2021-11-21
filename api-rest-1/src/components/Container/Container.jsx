import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './Styles.css';

export default function Container(){

    const [person, setPerson] = useState([]);
    const [btn, setBtn] = useState(true);

    var valor = [];

    useEffect(() => {
        api.get('')
        .then((resp) => setPerson(resp.data.results))
        .catch((error) => console.log(error))
    }, [btn])

    valor = person.slice(0, 10);
    
    return(
        <>
            <div className="container">
                <h1>Gerador de usuário</h1>
                <button onClick={() => {
                    btn ? setBtn(false) : setBtn(true)
                }}>Gerar</button>
               <div className="conteudo">
                    {
                        valor.map(resp => {
                            return <div className="person">
                                <img src={resp.picture.large} alt="foto" />
                                <p>Nome: {resp.name.first} {resp.name.last}</p>
                                <p>Idade: {resp.dob.age}</p>
                            </div>
                        })
                    }
               </div>
            </div>
        </>
    );
}