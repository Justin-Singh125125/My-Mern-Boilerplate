import React from 'react';
import "./style.css"

export default function FormLabel(props) {
    return (
        <div>
            <label class="form-label">{props.children}</label>
        </div>
    )
}
