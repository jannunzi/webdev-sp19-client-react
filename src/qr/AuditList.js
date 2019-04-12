import React from 'react'

const AuditList = () =>
<div>
    <br/>
    <h1 className="text-center">
        <a href="/items/123">
            <i className="fa fa-chevron-left float-left"></i>
        </a>
        AUDIT
    </h1>

    <div className="btn-group btn-block" role="group" aria-label="Basic example">
        <button
            type="button"
            className="btn btn-warning">
            ALL
        </button>
        <button
            type="button"
            className="btn btn-danger">
            <i className="fa fa-minus fa-2x"></i>
        </button>
        <button
            type="button"
            className="btn btn-success">
            <i className="fa fa-plus fa-2x"></i>
        </button>
        <button
            type="button"
            className="btn btn-primary">
            <i className="fa fa-check fa-2x"></i>
        </button>
    </div>
    <br/>
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
        <li className="list-group-item text-center">
            <a href="#"
               className="btn btn-success btn-lg float-left">
                +12
            </a>
            <span className="wb-2x">1/12/2019</span>
            <span className="wb-2x float-right">dan</span>
        </li>
        <li className="list-group-item text-center">
            <a href="#"
               className="btn btn-success btn-lg float-left">
                +12
            </a>
            <span className="wb-2x">1/12/2019</span>
            <span className="wb-2x float-right">dan</span>
        </li>
        <li className="list-group-item text-center">
            <a href="#"
               className="btn btn-success btn-lg float-left">
                +3
            </a>
            <span className="wb-2x">1/12/2019</span>
            <span className="wb-2x float-right">dan</span>
        </li>
        <li className="list-group-item text-center">
            <a href="#" className="btn btn-danger btn-lg float-left">
                -21
            </a>
            <span className="wb-2x">1/12/2019</span>
            <span className="wb-2x float-right">dan</span>
        </li>
        <li className="list-group-item text-center">
            <a href="#" className="btn btn-primary btn-lg float-left">
                3
            </a>
            <span className="wb-2x">1/12/2019</span>
            <span className="wb-2x float-right">alice</span>
        </li>
        <li className="list-group-item text-center">
            <a href="#" className="btn btn-primary btn-lg float-left">
                32
            </a>
            <span className="wb-2x">1/12/2019</span>
            <span className="wb-2x float-right">alice</span>
        </li>
        <li className="list-group-item text-center">
            <a href="#" className="btn btn-primary btn-lg float-left">
                35
            </a>
            <span className="wb-2x">1/12/2019</span>
            <span className="wb-2x float-right">alice</span>
        </li>
        <li className="list-group-item text-center">
            <a href="#" className="btn btn-danger btn-lg float-left">
                -2
            </a>
            <span className="wb-2x">1/12/2019</span>
            <span className="wb-2x float-right">dan</span>
        </li>
        <li className="list-group-item text-center">
            <a href="#" className="btn btn-danger btn-lg float-left">
                -3
            </a>
            <span className="wb-2x">1/12/2019</span>
            <span className="wb-2x float-right">dan</span>
        </li>
    </ul>
</div>

export default AuditList