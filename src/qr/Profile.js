import React from 'react'

const Profile = () =>
<div>
    <br/>
    <h1 className="text-center">
        <a href="/">
            <i className="fa fa-home float-left"></i>
        </a>
        PROFILE
        <a href="/">
            <i className="fa fa-check float-right"></i>
        </a>
    </h1>
    <label>Username</label>
    <input readOnly
        placeholder="Username"
        className="form-control form-control-lg"/>
    <br/>
    <label>Password</label>
    <input type="password"
           placeholder="Password"
           className="form-control form-control-lg"/>
    <br/>
    <label>First Name</label>
    <input placeholder="Alice"
           className="form-control form-control-lg"/>
    <br/>
    <label>Last Name</label>
    <input placeholder="Wonderland"
           className="form-control form-control-lg"/>
    <br/>
    <label>Email</label>
    <input placeholder="alice@wonderland.com"
           className="form-control form-control-lg"/>
    <br/>
    <a className="btn btn-block btn-lg btn-success"
       href="/login">
        UPDATE
    </a>
    <a className="btn btn-block btn-lg btn-primary"
       href="/items">
        INVENTORY
    </a>
    <a className="btn btn-block btn-lg btn-danger"
       href="/login">
        LOGOUT
    </a>
</div>

export default Profile