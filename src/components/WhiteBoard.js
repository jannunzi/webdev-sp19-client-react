import React, {Component} from 'react'
import CourseCard from "./CourseCards";
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseEditor from "./CourseEditor";
import Message from "./Message";
import Stateless from "./Stateless";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
class WhiteBoard extends Component {
  render() {
    return (
      <div>
        <h1>White Board</h1>
        <Link to="/grid">Course Grid</Link>
        <Router>
          <div>
            <Route path='/grid'
                   component={CourseGrid}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default WhiteBoard;