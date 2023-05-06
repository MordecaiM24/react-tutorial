export const Task = (props) => {
  return (
    <div className="task">
      <h1 style={{backgroundColor: props.completion && "green"}}>{props.taskName} {props.id}</h1>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <button onClick={() => props.completeTask(props.id)}> Complete </button>
    </div>
  );
}