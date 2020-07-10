import React, {useState} from 'react';


const InputElement = (props) => {

    const [value, setValue] = useState();

    return (
        <input type={props.type || "text"} value={value} className="required form-control" 
        required={props.required || true } name={props.name} id={props.id} onChange={ e => setValue(e.target.value)}/>
    )
}

export default InputElement;