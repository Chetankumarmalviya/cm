import React from 'react'

export default function Alert(props) {
    const capitalised=(word)=>{
       let a= word.toLowerCase();
        return a.charAt(0).toUpperCase()+a.slice(1);
    }
    return (
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
            <strong>{capitalised(props.alert.type)}</strong>{props.alert.msg}
        </div>
    )
}
