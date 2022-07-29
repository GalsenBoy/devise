import React, { useState } from 'react';

const Dollar = () => {
    const [Dollar, EuroDoll] = useState(1);

    const eurUsd = (e) => {
        EuroDoll(e.target.value * 0.98)
    }
    const affichage = () => {
        console.log(Dollar);
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={eurUsd} />
                <button type='button' onClick={affichage}>Convertir</button>
            </form>
            <div>
                <p>
                    {Dollar / 0.98} € vaut {Dollar}$
                </p>
            </div>
        </div>
    );
};

export default Dollar;