import React from 'react';

const container = (props) => {
  return (
    <div className='Container'>
        {props.children}
    </div>
  );
}
export default container;