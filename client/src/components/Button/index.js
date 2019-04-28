import React from 'react';
import LoadingSpinner from "../LoadingSpinner";
export default function Button(props) {
    return (
        <div>
            <button onClick={props.handleActivateSpinner} type="button" class="btn btn-danger">Send data</button>

            {/* if button is clicked */}

            {props.showSpinner ? <LoadingSpinner /> : ""}

        </div>
    )
}
