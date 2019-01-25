import courses from './courses.json'
class CourseService {
  constructor() {
    this.courses = courses;
  }
  addCourse = course => {
    if(course === null) {
      course = {
        id: (new Date()).getTime(),
        title: 'New Course'
      }
    }
    this.courses.push(course)
    return this.courses
  }
  findAllCourses = () =>
    this.courses;
  deleteCourse = deleteCourse =>
    this.courses = this.courses.filter(
      course => course.id !== deleteCourse.id
    )
}
export default CourseService