import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Scan from './Scan'
import AuditList from './AuditList'
import InventoryList from './InventoryList'
import InventoryItemDetails from './InventoryItemDetails'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Home from './Home'

const Inventory = () =>
<div>
    <Router>
        <div>
            <Route
                path="/"
                exact
                component={Home}/>
            <Route
                path="/items"
                exact
                component={InventoryList}/>
            <Route
                path="/scan"
                exact
                component={Scan}/>
            <Route
                path="/items/:id"
                exact
                component={InventoryItemDetails}/>
            <Route
                path="/items/:id/audit"
                exact
                component={AuditList}/>
            <Route
                path="/login"
                exact
                component={Login}/>
            <Route
                path="/register"
                exact
                component={Register}/>
            <Route
                path="/profile"
                exact
                component={Profile}/>
        </div>
    </Router>
</div>

export default Inventory