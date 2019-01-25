import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";

class CourseEditor extends React.Component {
  render() {
    return (
      <div>
        <h2>Course Editor</h2>
      <div className="row">
        <div className="col-4">
          <ModuleList/>
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