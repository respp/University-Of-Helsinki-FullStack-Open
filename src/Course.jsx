import React from 'react';
import { Parts } from './Parts';
import { Name } from './Name';
import { Total } from './Total';


export const Course = ({ course }) => {

  return (
    <div>
      <header><h1>Web development curriculum</h1></header>
      {
        course.map(course =>
          <div key={course.id}>
            <Name name={course.name}/>
            <Parts parts={course.parts}/>
            <Total parts={course.parts}/>
          </div>
        )
      }
    </div>
  );
};
