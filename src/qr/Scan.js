import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import InventoryList from './InventoryList'
import InventoryItemDetails from './InventoryItemDetails'

const Scan = () => (
<div>
    <br/>
    <h1 className="text-center">
        <a href="/items">
            <i className="fa fa-chevron-left float-left"></i>
        </a>
        SCAN
    </h1>
    <img className="wbdv-border-10px-black" width="100%" src="/images/bar.jpg"/>
    <br/>
    <br/>
    <input
        value={'671860013723'}
        placeholder="SKU"
        className="text-center form-control form-control-lg"/>
    <br/>
    <a className="btn btn-primary btn-block btn-lg"
       href="/items/new">
        SCAN
    </a>
    <a className="btn btn-danger btn-block btn-lg"
       href="/items">
        CANCEL
    </a>
</div>
)

export default Scan