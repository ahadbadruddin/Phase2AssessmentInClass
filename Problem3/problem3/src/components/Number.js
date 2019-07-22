import React from 'react';

export default function Number(props) {
 
    return (
        <div className="Number">
            <h2>
            {props.numb}
            </h2>
            <button onClick={(event)=>{
                    props.deleteNum(props.index)
                    props.sumNumbers()
                }}>
                    X
                </button>
        </div>
    );
}