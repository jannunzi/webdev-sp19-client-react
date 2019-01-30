const widgets =
    {
        widgets: [
            {
                id: 123,
                title: 'Widget 1',
                type: 'HEADING'
            },
            {
                id: 234,
                title: 'Widget 2',
                type: 'IMAGE'
            }
        ]
    }
const widgetReducer = (state = widgets, action) => {
    return state;
}

export default widgetReducer;