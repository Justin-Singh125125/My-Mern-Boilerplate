import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import API from "../../utils/Api";


import FormContainer from "../../components/FormContainer";


import "./style.css"




class Home extends Component {

    state = {
        title: "",
        author: "",
        synopsis: "",

        test: [],
        anotherTest: [],
        showSpinner: false
    }

    componentDidMount() {
        this.handleSetData();
    }

    handleSetData = () => {
        axios.get("/api/getAll").then((res) => {
            this.setState({
                test: res.data
            })

            console.log(res)
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
        console.log(newBook);

        API.saveBook(newBook).then((data) => {
            console.log("pushed")
            console.log(data);
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
                console.log(data);
                this.handleDeactivateSpinner();
                this.handleRemoveInputText();
                this.handleAlertSuccess();
            })
        }
        else {
            this.handleDeactivateSpinner();
            this.handleAlertFailure()
        }


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


                <FormContainer
                    handleInputChange={this.handleInputChange}
                    handleButtonSubmit={this.handleButtonSubmit}
                    showSpinner={this.state.showSpinner}
                    title={this.state.title}
                    author={this.state.author}
                    synopsis={this.state.synopsis}
                />

            </div>
        );
    }
}
export default Home;