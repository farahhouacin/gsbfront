import '../App.css'
import LoginForm from '../components/login/Login'
import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super (props)

    }
    render() {
        return (
            <div class="container-fluid">
           
            <LoginForm/>

            </div>
        )
        }
}
export default Login;
