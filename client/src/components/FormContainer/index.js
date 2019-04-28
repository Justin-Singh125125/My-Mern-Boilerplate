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
            <Form name="title" handleInputChange={props.handleInputChange} placeholder="The Great Gatsby" value={props.title} />
            <FormLabel>Author:</FormLabel>
            <Form name="author" handleInputChange={props.handleInputChange} placeholder="F. Scott Fitzgerald" value={props.author} />
            <FormLabel>Synopsis:</FormLabel>
            <Form name="synopsis" handleInputChange={props.handleInputChange} placeholder="Poor rich man loses love of life" value={props.synopsis} />
            <Button handleButtonSubmit={props.handleButtonSubmit} showSpinner={props.showSpinner} />
        </div>
    )
}
