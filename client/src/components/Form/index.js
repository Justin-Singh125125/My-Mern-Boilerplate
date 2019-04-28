import React from 'react'
import "./style.css"

export default function Form(props) {
    return (
        <div>
            <form className="form">
                <div className="form-group">
                    <input name={props.name} onChange={props.handleInputChange} value={props.value} type="text" className="form-control" id="formGroupExampleInput" placeholder={props.placeholder ? props.placeholder : "text"}></input>
                </div>
            </form>
        </div>
    )
}
