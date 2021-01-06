import React, { Component } from "react";
import API from "../utils/api";
import List from "./Cards/List";
import Navbar from "./Navbar/Navbar";




class Main extends Component {
    state = {
        users: [],
        search: "",
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

    firstNameAsc = () => {
        const users = this.state.users.sort((a, b) =>
          b.name.first.localeCompare(a.name.first)
        );
        this.setState({ users: users });
      };

    lastNameDesc = () => {
        const users = this.state.users.sort((a, b) =>
          b.name.last.localeCompare(a.name.last)
        );
        this.setState({ users: users });
      };


    render() {
        const { users, search } = this.state;

        const filteredUsers = users.filter((user) => {
          return user.name.first.toLowerCase().includes(search.toLowerCase()) 
           || user.name.last.toLowerCase().includes(search.toLowerCase())
        }
        
      );

    
        return (
            <div>
                <Navbar 
                handleChange={this.handleChange}
                firstNameAsc={this.firstNameAsc}
                lastNameDesc={this.lastNameDesc}/>
                <List users={filteredUsers}/>
            </div>
        );
    }
}

export default Main;
