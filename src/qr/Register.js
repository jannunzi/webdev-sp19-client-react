import React from 'react'

const Register = () =>
<div>
    <br/>
    <h1 className="text-center">
        REGISTER
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
    <label>Verify password</label>
    <input type="password"
           placeholder="Password"
           className="form-control form-control-lg"/>
    <br/>
    <a className="btn btn-lg btn-block btn-success"
       href="/profile">
        REGISTER
    </a>
    <a className="btn btn-lg btn-block btn-primary"
       href="/login">
        LOGIN
    </a>
</div>

export default Register