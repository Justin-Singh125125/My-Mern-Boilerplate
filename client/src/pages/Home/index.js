import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import API from "../../utils/Api";


import FormContainer from "../../components/FormContainer";


import "./style.css"




class Home extends Component {

    state = {
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



    render() {
        return (
            <div className="App">


                <FormContainer handleActivateSpinner={this.handleActivateSpinner} showSpinner={this.state.showSpinner} />

            </div>
        );
    }
}
export default Home;