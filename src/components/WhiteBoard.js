import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseTable from './CourseTable'
import CourseService from '../services/CourseService'
class WhiteBoard extends Component {
  constructor() {
    super();
    this.courseService = new CourseService()
    this.state = {
      courses: this.courseService.findAllCourses()
    }
  }
  deleteCourse = course =>
    this.setState({
      courses: this.courseService.deleteCourse(course)
    })
  render() {
    return (
      <div>
        <h1>White Board</h1>
        <Router>
          <div>
            <Link to="/">Course Grid</Link> |
            <Link to="/table">Course Table</Link>
            <Route path='/' exact
                   render={() =>
                     <CourseGrid
                       deleteCourse={this.deleteCourse}
                       courses={this.state.courses}/>}/>
            <Route path='/table'
                   render={() => <CourseTable courses={this.state.courses}/>}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default WhiteBoard;