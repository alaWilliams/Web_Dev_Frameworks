import Course from "./Course";
import App from "./App"

export default function CourseList ( {courses} ) {
  return (
    <>
      {courses.map(course => (
        <Course
          key={course.courseId}
          name={course.name}
          courseId={course.courseId}
          studentPositions={course.studentPositions}
        />
      ))
    }
    </>
  )
}