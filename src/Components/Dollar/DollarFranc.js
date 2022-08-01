import React, { useState } from 'react';

const DollarFranc = () => {

    //Conversion Euro en dollar
    const [Dollar, dollarFranc] = useState(1);

    const dollFranc = (e) => {
        dollarFranc(e.target.value * 641)
    }



    return (
        <div>
            <form action="">
                <label htmlFor="devise">Somme à Convertir</label>
                <input type="text" onChange={dollFranc} />

            </form>
            <div>
                <p>
                    {Dollar / 641} $ vaut {Dollar}F
                </p>
            </div>
        </div>
    );
};

export default DollarFranc;