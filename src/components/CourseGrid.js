import React from 'react'
import CourseCard from './CourseCard'
const CourseGrid = ({courses}) =>
  <div className="card-deck">
    {
        courses.map(course =>
          <CourseCard
            course={course}
            key={course.id}/>
        )
    }
  </div>

export default CourseGrid