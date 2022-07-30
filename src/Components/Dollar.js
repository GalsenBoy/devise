import React, { useState } from 'react';

const Dollar = () => {

    //Conversion Euro en dollar
    const [Dollar, EuroDoll] = useState(1);

    const eurUsd = (e) => {
        EuroDoll(e.target.value * 0.98)
    }

    //Conversion dollar Canadien en dollar
    const [UsdCad, CadDoll] = useState(1)
    const usdCad = (e) => {
        CadDoll(e.target.value * 0.98)
    }


    /*
    const affichage = () => {
        console.log(Dollar);
    }
    */

    return (
        <div>
            <form action="">
                <label htmlFor="devise">Somme à Convertir</label>
                <input type="text" onChange={eurUsd} />

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