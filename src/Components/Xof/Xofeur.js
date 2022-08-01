import React, { useState } from 'react';

const Xofeur = () => {
    const [Xof, xofDollar] = useState(1);

    const XofDollard = (e) => {
        xofDollar(e.target.value * 0.00152)
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={XofDollard} />
            </form>
            <div>
                <p>
                    {Xof / 0.00152} F vaut {Xof}€
                </p>
            </div>
        </div>
    );
};

export default Xofeur;