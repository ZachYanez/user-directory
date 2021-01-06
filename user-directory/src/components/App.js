import React, { Component } from "react";
import API from "../utils/api";
import List from "./Cards/List";
import Navbar from "./Navbar/Navbar";




class Main extends Component {
    state = {
        users: [],
        search: "",
        searchTwo:"",
        results: [],
        error: "" 
    };

    // When the component mounts, get a list of all available users and update this.state.users
    componentDidMount() {
        API.getRandomUsers()
            .then(res => {
                this.setState({ users: res.data.results })
                console.log(res.data.results)
            })
            .catch(err => console.log(err));
    }
    
    handleChange = (e) => {
        this.setState({ search: e.target.value });
      };

    handleChange2 = (e) => {
        this.setState({ searchTwo: e.target.value });
      };



   
    render() {
        const { users, search, searchTwo } = this.state;

        const filteredUsers = users.filter((user) =>
        user.name.last.toLowerCase().includes(search.toLowerCase())
      );
      const filteredUsersTwo = users.filter((user) =>
        user.name.first.toLowerCase().includes(searchTwo.toLowerCase())
      );
  

        return (
            <div>
                <Navbar 
                handleChange={this.handleChange}
                handleChange2={this.handleChange2}/>
                <List users={filteredUsers, filteredUsersTwo}/>
            </div>
        );
    }
}

export default Main;
