import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'

const WidgetComponent = ({widget, deleteWidget, updateWidget}) =>
    <div>
        <button onClick={() => deleteWidget(widget)}>Delete</button>
        <select
            onChange={(event) => {
                widget.type = event.target.value
                updateWidget(widget)
            }}
            className="form-control" value={widget.type}>
            <option value="HEADING">Heading</option>
            <option value="IMAGE">Image</option>
        </select>
        {
            widget.type=='HEADING' &&
                <HeadingWidget
                    updateWidget={updateWidget}
                    widget={widget}/> ||
            widget.type=='IMAGE'   && <ImageWidget   widget={widget}/>
        }
    </div>

export default WidgetComponent