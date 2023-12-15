import React, { useContext } from 'react';
import { Design } from '../App';
import UseState from './UseState';

function Content() {

    const style = useContext(Design);
    const stylety = {
        backgroundColor: style ? '#495867' : '#ecc8af',
        color: style ? 'white' : 'black'
    }


  return (
    <div style = {stylety}>
       <UseState/>   
    </div>
  )
}

export default Content