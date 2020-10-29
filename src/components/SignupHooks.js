import React, {useState} from 'react'

const SignupHooks = () => {

    const initialUserState = {
        first_name: "",
        last_name: "",
        username: "",
        password: ""
    }

    const [eachEntry, setEachEntry] = useState({initialUserState})

    const {first_name, last_name, username, password} = eachEntry

    const handleInputChange = (e) => {
        setEachEntry({...eachEntry, [e.target.name]: e.target.value})
        console.log(eachEntry)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(eachEntry)

        // const postObj = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "applicaiton/json"
        //     },
        //     body: JSON.stringify(newUser)
        // }

        // fetch("http://localhost:3000/users", postObj)
        // .then(resp => resp.json())
        // .then(data => console.log(data))

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