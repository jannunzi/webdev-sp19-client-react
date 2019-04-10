import React from 'react'

const InventoryItemDetails = ({item}) =>
<div>
    <h1>Item Details</h1>
    <input
        placeholder="field 1"
        className="form-control"/>
    <button
        className="btn btn-primary btn-block">
        Add
    </button>
</div>

export default InventoryItemDetails