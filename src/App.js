import React, { createRef, useState } from 'react';
import Dollar from './Components/Dollar';
import Xof from './Components/Xof';
import Euro from './Components/Euro';
import 'bulma';

const App = () => {
  const deviseList = [
    <Dollar />,
    <Euro />,
    <Xof />
  ];

  const selectRef = createRef();

  const handleChange = () => {
    setState({
      ...state,
      selected: selectRef.current.value,
    })
  }

  const initState = {
    selected: 0
  };
  const [state, setState] = useState(initState);
  const deviseElement = deviseList[state.selected];


  return (
    <div className='hero is-fullheight is-warning'>
      <div className='hero-body is-flex-direction-column is-align-items-center is-justify-content-center '>
        <form action="">
          <div className='field'>
            <label className='label' htmlFor="devise">Saisir la somme à convertir</label>
            <div className='select is-link is-fullwidth'>
              <select onChange={handleChange} ref={selectRef} name="devise" id="devise">
                <option value="0" >Dollar</option>
                <option value="1" >Euro</option>
                <option value="2" >Franc CFA</option>
              </select>
            </div>
          </div>
        </form>
        <div className='box '>
          {deviseElement}
        </div>
      </div>
    </div>
  );
};

export default App;