export const Task = (props) => {
  return (
    <div style={{backgroundColor: props.completion && "green"}} className="task">
      <h1>{props.taskName} {props.id}</h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button onClick={() => props.completeTask(props.id)}> Complete </button>
    </div>
  );
}