import React, {Component} from 'react'

class Navigation extends Component{

    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            loggedIn: false
        }
    }

    handleInputChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
            
        })
        
    }

    handleLogin = (e) => {
        e.preventDefault()
        console.log("username:", this.state.username)
        console.log("password:", this.state.password)

        //need to compare if the user signing in already exists. If so, they get redirected to their profile page. If not they get redirected to sign up page
    }


    render(){
        return(
            <div className="navigation-container">
                <h1>Graffito</h1>
                <div className="buttons">
                    <form onSubmit={this.handleLogin}>
                        <input placeholder="User Name" name="username" value={this.state.value}onChange={this.handleInputChange}/>
                        <input placeholder="Password" name="password" value={this.state.value} onChange={this.handleInputChange}/>
                        <input type="submit" value="Log In"/>
                    </form>

                    <button className="nav-btn">Sign Up</button>
                </div>
            </div>
        )
    }    
}

export default Navigation