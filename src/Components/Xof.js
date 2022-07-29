import React, { useState } from 'react';

const Xof = () => {
    const [Xof, xofDollar] = useState(1);

    const XofDollard = (e) => {
        xofDollar(e.target.value * 0.0015)
    }
    const affichage = () => {
        console.log(Xof);
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={XofDollard} />
                <button type='button' onClick={affichage}>Convertir</button>
            </form>
            <div>
                <p>
                    {Xof / 0.0015} € vaut {Xof}$
                </p>
            </div>
        </div>
    );
};

export default Xof;