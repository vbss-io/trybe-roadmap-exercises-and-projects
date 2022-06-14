function ToDoList({ tasks }) {
  return (
    <ol>
      {
        tasks.map((task, index) => (
          <li key={ index }>{ task }</li>
        ))
      }
    </ol>
  );
}

export default ToDoList;