import React, { Component } from "react";
import API from "../utils/api";
import Navbar from "./Navbar/Navbar";



class Main extends Component {
    state = {
        search: "",
        users: [{}],
        results: [],
        error: "" 
    };

    // When the component mounts, get a list of all available users and update this.state.users
    componentDidMount() {
        API.getRandomUsers()
            .then(res => {
                this.setState({ users: res.data.message })
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };


    render() {
        return (
            <div>
                <Navbar/>
            </div>
        );
    }
}

export default Main;
