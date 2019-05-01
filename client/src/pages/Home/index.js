import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import API from "../../utils/Api";
import Table from "../../components/Table";


import FormContainer from "../../components/FormContainer";





import "./style.css"




class Home extends Component {

    state = {
        title: "",
        author: "",
        synopsis: "",

        allBooks: [],
        test: [],
        anotherTest: [],
        showSpinner: false
    }

    componentDidMount() {
        this.handleSetData();
        this.handleRetreiveAllBooks();
    }

    handleSetData = () => {
        axios.get("/api/getAll").then((res) => {
            this.setState({
                test: res.data
            })


        })
    }

    handleRenderTestList = () => {
        var listTest = this.state.test.map((t) => (
            <li>{t}</li>
        ))
        this.setState({
            anotherTest: listTest
        })
    }

    handlePushToDatabase = () => {
        var newBook = {
            title: "I love monica",
            author: "so much",
            synopsis: "asdfasdf"
        }

        API.saveBook(newBook).then((data) => {

        })
    }

    handleActivateSpinner = () => {
        this.setState({
            showSpinner: true
        })
    }
    handleDeactivateSpinner = () => {
        this.setState({ showSpinner: false })
    }
    handleInputChange = (e) => {

        const { value, name } = e.target;
        // this.setState({ [value]: value })
        this.setState({ [name]: value })
    }
    handleButtonSubmit = () => {
        this.handleActivateSpinner();
        this.handleSendBookToDatabase();
    }

    handleSendBookToDatabase = () => {
        var newBook = {
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis
        }

        if (this.state.title && this.state.author && this.state.synopsis) {
            API.saveBook(newBook).then((data) => {
                this.handleDeactivateSpinner();
                this.handleRemoveInputText();
                this.handleAlertSuccess();

                this.handleRetreiveAllBooks();
            })
        }
        else {
            this.handleDeactivateSpinner();
            this.handleAlertFailure()
        }


    }
    handleRetreiveAllBooks = () => {
        API.getBooks().then((data) => {
            console.log(data);
            this.setState({
                allBooks: data.data
            })
        })
    }



    handleRemoveInputText = () => {
        this.setState({
            title: "",
            author: "",
            synopsis: ""
        })
    }

    handleAlertSuccess = () => {
        alert("Book added to database successfully")
    }
    handleAlertFailure = () => {
        alert("Book added to database Failed")
    }




    render() {
        return (
            <div className="App">

                <div className="save-book-container">
                    <FormContainer
                        handleInputChange={this.handleInputChange}
                        handleButtonSubmit={this.handleButtonSubmit}
                        showSpinner={this.state.showSpinner}
                        title={this.state.title}
                        author={this.state.author}
                        synopsis={this.state.synopsis}
                    />
                </div>
                <div className="retrieve-book-container">
                    <Table allBooks={this.state.allBooks} />
                </div>

            </div>
        );
    }
}
export default Home;