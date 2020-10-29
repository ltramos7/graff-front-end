import React, {useState} from 'react'

const SignupHooks = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleInputChange = (event) => {
        console.log(event.target.value)
        // setFirstName(event.target.name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("submit button clicked")
    }

    
    return(
        <div>
            <h1> This should be the signup using functional components</h1>

            <form onSubmit={handleSubmit}>
              <input name="first_name" type="text" placeholder="First Name" onChange={handleInputChange}/>
              <input name="last_name" type="text" placeholder="Last Name" onChange={handleInputChange}/>
              <input name="username" type="text" placeholder="User Name" onChange={handleInputChange}/>
              <input name="password" type="password" placeholder="Password" onChange={handleInputChange}/>
              <input type="submit" value="Submit"/>
            </form>

        </div>
    ) 
}

export default SignupHooks