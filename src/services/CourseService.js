import courses from './courses.json'
class CourseService {
  constructor() {
    this.courses = courses;
  }
  findAllCourses = () =>
    this.courses;
  deleteCourse = deleteCourse =>
    this.courses = this.courses.filter(
      course => course.id !== deleteCourse.id
    )
}
export default CourseService