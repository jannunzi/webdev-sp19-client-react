import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import WhiteBoard from './components/WhiteBoard'
import WidgetList from './components/WidgetList'
import WidgetListContainer from './containers/WidgetListContainer'
import widgetReducer from './reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// const store = createStore(widgetReducer);

ReactDOM.render(
  <div className="container-fluid">
      <WhiteBoard/>
  </div>,
  document.getElementById("root")
);