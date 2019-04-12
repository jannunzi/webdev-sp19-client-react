import React from 'react'

const InventoryItemDetails = ({item, matches}) =>(
<div>
    <br/>
    <h1 className="text-center">
        <a href="/scan">
            <i className="fa fa-chevron-left float-left"></i>
        </a>
        PRODUCT
    </h1>
    <div className="text-center wbdv-border-1px-gray">
    <img height="300px"
         src="/images/baby-formula.jpg"/>
    </div>
    <br/>
    <label>Current Quantity</label>
    <input
        type="number"
        value="123"
        placeholder="Quantity"
        className="text-right form-control form-control-lg"/>
    <br/>
    <div className="btn-group btn-block btn-group-lg" role="group" aria-label="Basic example">
        <button
            onClick={() => {
                const add = prompt("How many do you want to remove?")
                console.log(add)
            }}
            type="button"
            className="btn btn-danger">
            <i className="fa fa-minus fa-2x"></i>
        </button>
        <button
            onClick={() => {
                const add = prompt("How many do you want to add?")
                console.log(add)
            }}
            type="button"
            className="btn btn-success">
            <i className="fa fa-plus fa-2x"></i>
        </button>
    </div>
    <br/>
    <br/>
    <a href="/"
       className="btn btn-primary btn-lg btn-block">
        <i className="fa fa-check fa-2x"></i>
    </a>
    <br/>
    <div className="row">
        <div className="col-6">
            <label>
                Date
            </label>
            <input
                type="date"
                value="2019-01-19"
                className="text-right form-control form-control-lg"/>
        </div>
        <div className="col-6">
            <label>
                Time
            </label>
            <input
                value="12:23:34"
                type="time"
                className="text-right form-control form-control-lg"/>
        </div>
    </div>
    <br/>
    <label>Sku</label>
    <input
        placeholder="671860013723"
        value={'671860013723'}
        className="form-control form-control-lg text-center"/>
    <br/>
    <label>
        Field 1 label
    </label>
    <i className="fa fa-pencil float-right"></i>
    <i className="fa fa-arrow-up float-right"></i>
    <i className="fa fa-arrow-down float-right"></i>
    <input
        placeholder="Field 1 value"
        className="form-control form-control-lg"/>
    <br/>
    <label>Field 2 label</label>
    <i className="fa fa-pencil float-right"></i>
    <i className="fa fa-arrow-up float-right"></i>
    <i className="fa fa-arrow-down float-right"></i>
    <input
        placeholder="Field 2 value"
        className="form-control form-control-lg"/>
    <br/>
    <label>Field 3 label</label>
    <i className="fa fa-pencil float-right"></i>
    <i className="fa fa-arrow-up float-right"></i>
    <i className="fa fa-arrow-down float-right"></i>
    <input
        placeholder="Field 3 value"
        className="form-control form-control-lg"/>
    <br/>
    <label>Field 4 label</label>
    <i className="fa fa-pencil float-right"></i>
    <i className="fa fa-arrow-up float-right"></i>
    <i className="fa fa-arrow-down float-right"></i>
    <input
        placeholder="Field 4 value"
        className="form-control form-control-lg"/>
    <br/>
    <a href="#" className="btn btn-primary btn-block btn-lg">
        ADD FIELD
    </a>
    <a className="btn btn-warning btn-lg btn-block" href="/items/123/audit">
        VIEW AUDIT
    </a>
    <br/>
</div>
)

export default InventoryItemDetails