import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'

const stateToPropertyMapper = state => ({
    widgets: state.widgets
})

const WidgetListContainer = connect(
    stateToPropertyMapper
)(WidgetList)

export default WidgetListContainer