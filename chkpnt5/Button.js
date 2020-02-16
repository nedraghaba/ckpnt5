import React from 'react';

    export default function Button(props){
        return(
            <div>

         
            {
                (props.isShown)? (<button 
                onClick={props.onSimpleClick}>
                {props.children}
                </button>) :(<p> button is hidden</p>)
            }
        
            
        </div> 
        );
    }