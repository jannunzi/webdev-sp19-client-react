import React from 'react'
import qrdb from './qr.json'

const QrDb = () =>
<div>
    <br/>
    <h1>
        Item List
        {/*<i className="fa fa-plus float-right"></i>*/}
        <button
            className="btn btn-primary float-right">
            Add
        </button>
    </h1>
    <ul className="list-group">
        <li className="list-group-item">
            <div class="input-group mb-3">
                <input type="text"
                       class="form-control"
                       placeholder="Search"/>
                    <div class="input-group-append">
                        <button
                            class="btn btn-success"
                            type="button"
                            id="button-addon2">
                            Scan Search</button>
                    </div>
            </div>
        </li>
        {
            qrdb.map(item =>
                <li className="list-group-item" key={item.id}>
                    <i className="fa fa-chevron-right float-right"></i>
                    <span className="float-right">{item.quantity}</span>
                    {item.title}
                </li>
            )
        }
    </ul>
</div>

export default QrDb