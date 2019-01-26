import React from 'react'

const LessonTabs = ({lessons}) =>
  <ul className="nav nav-tabs">
    {
      lessons.map(lesson =>
        <li key={lesson.id} className="nav-item">
          <a className="nav-link active"
             href="#">{lesson.title}
          </a>
        </li>
      )
    }
  </ul>
export default LessonTabs