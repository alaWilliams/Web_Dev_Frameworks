import './App.css'
import CourseList from "./CourseList"

function App() {
  const courses = [
  { name: "Course 1", courseId: "ABC123", studentPositions: 10 },
  { name: "Course 2", courseId: "XYZ456", studentPositions: 20 },
  { name: "Course 3", courseId: "DEF789", studentPositions: 30 },
];
  return (
    <CourseList courses={courses} />
  )
}

export default App
