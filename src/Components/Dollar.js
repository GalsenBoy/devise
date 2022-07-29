import React, { useState } from 'react';

const Dollar = () => {
    const [Euro, EuroDoll] = useState(1);

    const eurUsd = (e) => {
        EuroDoll(e.target.value * 1.01)
    }
    const affichage = () => {
        console.log(Euro);
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
                    {Euro / 1.01} € vaut {Euro}$
                </p>
            </div>
        </div>
    );
};
export default Dollar;
