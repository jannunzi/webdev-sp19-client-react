import React from 'react'
import WidgetComponent from './WidgetComponent'
const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget}) =>
    <div>
        <h1>Widget List {widgets.length}</h1>
        <div className="list-group">
        {
            widgets.map(widget =>
                <WidgetComponent
                    key={widget.id}
                    updateWidget={updateWidget}
                    deleteWidget={deleteWidget}
                    widget={widget}/>
            )
        }
        <button
            onClick={addWidget}
            className="btn btn-success">
            Add
        </button>
        </div>
    </div>

export default WidgetList