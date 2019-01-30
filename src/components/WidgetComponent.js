import React from 'react'
import HeadingWidget from './HeadingWidget'
import ImageWidget from './ImageWidget'

const WidgetComponent = ({widget, deleteWidget}) =>
    <div>
        <button onClick={() => deleteWidget(widget)}>Delete</button>
        {
            widget.type=='HEADING' && <HeadingWidget widget={widget}/> ||
            widget.type=='IMAGE'   && <ImageWidget   widget={widget}/>
        }
    </div>

export default WidgetComponent