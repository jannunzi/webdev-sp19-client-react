import React, {Component} from 'react'

const CourseCard = () =>
  <div className="card"
       styles={{width: '18rem'}}>
    <img className="card-img-top"
         src="https://picsum.photos/300/200"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Card text.</p>
      <a href="#" className="btn btn-primary">More...</a>
    </div></div>
export default CourseCard;