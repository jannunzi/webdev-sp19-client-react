import React from 'react'

const HeadingWidget = ({widget}) =>
<div>
    <h2>Heading Widget</h2>
    <h3>Preview</h3>
    {
        widget.size === 1 && <h1>{widget.text}</h1> ||
        widget.size === 2 && <h2>{widget.text}</h2> ||
        widget.size === 3 && <h3>{widget.text}</h3> ||
        widget.size === 4 && <h4>{widget.text}</h4> ||
        widget.size === 5 && <h5>{widget.text}</h5>
    }
</div>

export default HeadingWidget