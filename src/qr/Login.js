import React from 'react'

const Login = () =>
<div>
    <br/>
    <h1 className="text-center">
        LOGIN
    </h1>
    <label>Username</label>
    <input
        placeholder="Username"
        className="form-control form-control-lg"/>
    <br/>
    <label>Password</label>
    <input type="password"
        placeholder="Password"
        className="form-control form-control-lg"/>
    <br/>
    <a className="btn btn-lg btn-block btn-primary"
       href="/profile">
        LOGIN
    </a>
    <a className="btn btn-lg btn-block btn-success"
       href="/register">
        REGISTER
    </a>
    <br/>
</div>

export default Login