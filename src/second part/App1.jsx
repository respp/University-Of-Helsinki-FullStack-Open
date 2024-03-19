import { Course } from "./Course"

const App = () => {
    const course = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      },
      {
        name: 'Html + CSS',
        id: 3,
        parts: [
          {
            name: 'Elements',
            exercises: 6,
            id: 1
          },
          {
            name: 'Atributes',
            exercises: 3,
            id: 2
          },
          {
            name: 'css',
            exercises: 30,
            id: 3
          }
        ]
      }
    ]
  
    return (
    <Course course={course} />
    )
  }
  
  export default App
