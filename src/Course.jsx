import React from 'react'

export const Course = ({course}) => {
  const exercises = course.parts.map(x => x.exercises)

    return (
        <div>
          <header><h1>{course.name}</h1></header>
            {course.parts.map(part => 
    
              <p key={part.id}>
                {part.name} {part.exercises}
              </p>
            )}

            <h4>total of {
                exercises.reduce((acc,el)=> acc+el, 0)} exercises</h4> 
        </div>
      )
}
