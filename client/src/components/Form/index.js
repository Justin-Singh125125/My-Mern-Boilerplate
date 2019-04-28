import React from 'react'
import "./style.css"

export default function Form() {
    return (
        <div>
            <form className="form">
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                </div>
            </form>
        </div>
    )
}
