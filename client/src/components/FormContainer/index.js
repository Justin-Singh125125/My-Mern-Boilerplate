import React from 'react';
import "./style.css";

import Form from "../Form";
import FormLabel from "../FormLabel";
import Button from "../Button";

export default function FormContainer(props) {
    return (
        <div className="form-container">
            <h1>Save a book to the database!</h1>

            <FormLabel>Title:</FormLabel>
            <Form />
            <FormLabel>Author:</FormLabel>
            <Form />
            <FormLabel>Synopsis:</FormLabel>
            <Form />
            <Button handleActivateSpinner={props.handleActivateSpinner} showSpinner={props.showSpinner} />
        </div>
    )
}
