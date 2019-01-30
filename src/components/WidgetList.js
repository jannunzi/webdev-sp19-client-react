import React from 'react'
import WidgetComponent from './WidgetComponent'
const WidgetList = ({widgets, deleteWidget}) =>
    <div>
        <h1>Widget List {widgets.length}</h1>
        <div className="list-group">
        {
            widgets.map(widget =>
                <WidgetComponent
                    key={widget.id}
                    widget={widget}/>
            )
        }
        </div>
    </div>

export default WidgetList