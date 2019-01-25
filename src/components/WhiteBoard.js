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
        <Router>
          <div>
            <Link to="/modules">Modules</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/lessons">Lessons</Link>
            <Link to="/grid">Course Grid</Link>
            <Route path='/grid'
                   component={CourseGrid}/>
            <Route path='/modules'
                   component={ModuleList}/>
            <Route path='/topics'
                   component={TopicPills}/>
            <Route path='/lessons'
                   component={LessonTabs}/>
          </div>
        </Router>
        <ModuleList/>
        <Stateless message="Stateless World"/>
        <Message message="life is good!"/>
        <CourseEditor/>
        <TopicPills/>
        <LessonTabs/>
        <div className="card-deck">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
        <CourseGrid/>
      </div>
    )
  }
}

export default WhiteBoard;