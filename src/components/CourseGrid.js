import React from 'react'
import CourseCard from './CourseCards'
const CourseGrid = ({courses}) =>
  <div className="card-deck">
    {
        courses.map(course =>
          <CourseCard key={course.id}/>
        )
    }
  </div>

export default CourseGrid