import React, {Component} from 'react'

class Navigation extends Component{
    render(){
        return(
            <div className="navigation-container">
                <h1>Graffito</h1>
                <div className="buttons">
                    <form>
                        <input placeholder="User Name"/>
                        <input placeholder="Password"/>
                        <input type="submit" value="Log In"/>
                    </form>

                    <button className="nav-btn">Sign Up</button>
                </div>
            </div>
        )
    }    
}

export default Navigation