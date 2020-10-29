import React, {Component} from 'react'

class Signup extends Component{

    constructor(){
        super()
        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            password: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({
            ...this.state, [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const postObj = {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        fetch("http://localhost:3000/users", postObj)
        .then(resp => resp.json() )
        .then(data => console.log(data))
    }


    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
              <input name="first_name" type="text" placeholder="First Name" onChange={this.handleInputChange}/>
              <input name="last_name" type="text" placeholder="Last Name" onChange={this.handleInputChange}/>
              <input name="username" type="text" placeholder="User Name" onChange={this.handleInputChange}/>
              <input name="password" type="password" placeholder="Password" onChange={this.handleInputChange}/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        )
    }
}

export default Signup