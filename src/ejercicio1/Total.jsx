import React from 'react'

export const Total = ({ parts }) => {
  const totalExercises = parts.reduce((accumulator, allParts) => {
    return accumulator + allParts.exercises;
  }, 0);

  return (
    <div>
      El total de los ejercicios es: {totalExercises}
    </div>
  );
};