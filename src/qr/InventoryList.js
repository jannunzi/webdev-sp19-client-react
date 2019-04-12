import React from 'react'
import qrdb from './qr.json'

const InventoryList = () =>
<div>
    <br/>
    <h1 className="text-center">
        <a href="/">
            <i className="fa fa-home float-left"></i>
        </a>
        INVENTORY
        <a href="/profile" className="float-right">
            <i className="fa fa-user float-left"></i>
        </a>
    </h1>
    <a href="scan"
       className="color-white btn-block btn btn-lg btn-primary">
        SCAN
    </a>

    <br/>
    <select className="form-control form-control-lg">
        <option>alice</option>
        <option>dan</option>
        <option>bob</option>
        <option>charlie</option>
    </select>

    <br/>
    <div className="row">
        <div className="col-4">
            <input
                type="date"
                className="text-right form-control"/>
        </div>
        <div className="col-4">
            <input
                type="date"
                className="text-right form-control"/>
        </div>
        <div className="col-2">
            <button
                type="button"
                className="btn btn-primary btn-block">
                <i className="fa fa-arrow-up"></i>
            </button>
        </div>
        <div className="col-2">
            <button
                type="button"
                className="btn btn-primary btn-block">
                <i className="fa fa-search"></i>
            </button>
        </div>
    </div>
    <br/>

    <ul className="list-group">
        {
            qrdb.map(item =>
                <li className="list-group-item"
                    key={item.id}>
                    <a href={`/items/${item.id}`}
                       className="btn btn-sm btn-success float-right">
                        Edit
                        {/*<i className="fa fa-chevron-right float-right"></i>*/}
                    </a>
                    <span className="margin-right-15-px float-right">123</span>
                    {item.title}
                </li>
            )
        }
    </ul>
</div>

export default InventoryList