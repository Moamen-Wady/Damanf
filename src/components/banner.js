import React from 'react'
import './banner.css'
import { useState, useCallback } from 'react';

export default function Banner() {

    var [ z, setZ ] = useState( 0 );
    var i
    var x = [ 0, 1, 2 ];
    const banner = () => {
        for ( i = 0; i < x.length; i++ ) {
            document.getElementById( `${ x[ i ] }` ).style.opacity = 0;
        }
        document.getElementById( `${ x[ z ] }` ).style.opacity = 1;
        setZ( z += 1 )
        if ( z > ( x.length - 1 ) ) { setZ( 0 ) }
    }
    useCallback( () => {
        setZ( 0 )
    }, [] )
    useCallback( setTimeout( banner, 3000 ) )

    return (

        <header className='head ' >
            <div className='slz '>
                <img id={ 0 } src='1.jpg' alt='' className='bg ' />
            </div>
            <div className='slz '>
                <img id={ 1 } src='2.jpg' alt='' className='bg ' />
            </div>
            <div className='slz '>
                <img id={ 2 } src='3.jpg' alt='' className='bg ' />
            </div>
        </header>
    )
}
