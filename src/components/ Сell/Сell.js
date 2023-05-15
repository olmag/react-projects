import React from 'react';
import './Cell.css'

const Cell = ({number, id, isActive, onClick}) =>{
    return (
      <div className={ isActive === false ? 'cell passive' : 'cell active' } id={id} onClick={onClick}>
        <p className='cell_number' >{number}</p>
      </div>
    );
  }
  
  export default Cell;