export function Header(props){
  return(
    <h1>{props.course.name}</h1>
  )
}

export function Content(props){
  return(
    <div>
      {props.course.parts.map(part => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

export function Part(props){
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

export function Total(props){
  let totalExercises = 0;
  for (let i = 0; i < props.course.parts.length; i++) {
    totalExercises += props.course.parts[i].exercises;
  }
  return(
    <p>Number of exercies {totalExercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App