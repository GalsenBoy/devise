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
            </form>
            <div>
                <p>
                    {Xof / 0.0015} F vaut {Xof}$
                </p>
            </div>
        </div>
    );
};

export default Xof;