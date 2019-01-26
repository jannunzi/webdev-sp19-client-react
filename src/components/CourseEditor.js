import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseService from "../services/CourseService"

class CourseEditor extends React.Component {
  constructor(props) {
    super(props)
    this.courseService = new CourseService()
    const courseId = parseInt(props.match.params.id)
    this.state = {
      course: this.courseService.findCourseById(courseId)
    }
  }
  render() {
    return (
      <div>
        <h2>Course Editor: {this.state.course.title}</h2>
      <div className="row">
        <div className="col-4">
          <ModuleList modules={this.state.course.modules}/>
        </div>
        <div className="col-8">
          <LessonTabs/>
          <TopicPills/>
        </div>
      </div>
      </div>
    )
  }
}
export default CourseEditor