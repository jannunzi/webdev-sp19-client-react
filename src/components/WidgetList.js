import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'
const WidgetList = ({widgets}) =>
    <div>
        <h1>Widget List {widgets.length}</h1>
        <div className="list-group">
        {
            widgets.map(widget =>
                widget.type=='HEADING' && <HeadingWidget/> ||
                widget.type=='IMAGE' && <ImageWidget/>
            )
        }
        </div>
    </div>

export default WidgetList