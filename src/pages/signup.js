import React, {Component} from "react";
import API from '../utils/API'

class signup extends Component{

    state ={
        email: "",
        password: ""
    }

    userSave = () => {
        API.createUser({
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            console.log(res)
        }).catch(err => {
            alert(err);
        })
    }

    loadLogin = () => {
        document.location.replace('/login')
    }
    
    handleFormSubmit = event => {
        event.preventDefault();
        
    }

    handleInputChange = e =>{
        const target = e.target;
        let value = target.value;
        const name = target.name;
  
        this.setState({
            [name]: value
        });

    }
    
    render(){
        return(
            <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
            <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
                <div
                className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                >
                Elevate Sign Up
                </div>
                <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="username"
                >
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    v-model="form.email"
                    type="email"
                    required
                    autofocus
                    placeholder="Email"
                    onChange = {this.handleInputChange}
                    name = "email"
                    value = {this.state.email}
                />
                </div>
                <div className="mb-6">
                <label
                    className="block text-gray-700 text-sm font-normal mb-2"
                    for="password"
                >
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="form.password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    autocomplete="current-password"
                    onChange = {this.handleInputChange}
                    name = "password"
                    value = {this.state.password}
                />
                </div>
                <div className="flex items-center justify-between">
                <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign Up</button>
                <a
                    className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                    onClick ={this.loadLogin}
                >
                   Click here to Login
                </a>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Elevate. All rights reserved.
            </p>
            </div>
        </div>
        );
    }
}

export default signup;