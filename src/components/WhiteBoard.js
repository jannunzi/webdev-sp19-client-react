import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
class WhiteBoard extends Component {
  constructor() {
    super();
    const courseService = new CourseService()
    this.state = {
      courses: courseService.findAllCourses()
    }
  }
  render() {
    return (
      <div>
        <h1>White Board</h1>
        <Router>
          <div>
            <Link to="/">Course Grid</Link> |
            <Link to="/table">Course Table</Link>
            <Route path='/' exact
                   component={CourseGrid}/>
            <Route path='/table'
                   component={CourseTable}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default WhiteBoard;