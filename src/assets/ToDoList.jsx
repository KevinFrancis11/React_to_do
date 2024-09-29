import { useState } from "react";

function ToDoList() {
//'Take a shower', 'Eat fruits', 'Take dogs to a walk'
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask(" ");
        }

    }

    function deleteTask(index) {
        // here tasks.filter((element, i) => i !== index) in this code if we dont use any parameter in the arrow funtion just put _ in its place
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index) {
        if(index>0){
        const updatedTask = [...tasks];
        // const temp = updatedTask[index-1];
        // updatedTask[index-1] = updatedTask[index];
        // updatedTask[index] = temp;
        [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]
        setTasks(updatedTask);
        }
    }

    function moveTaskDown(index) {
  
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]]
            //[updatedTasks[index-1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index-1]];
            setTasks(updatedTask);
        }
    }


    return (
        <div className="to-do-list">
            <h1>TO-DO-LIST</h1>

            <div>
                {/* input field to add tasks */}
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />

                {/*Task add button */}
                <button
                    className="add-button"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>


            { tasks.length ?
             <ol>
                {tasks.map((task, index) =>
                
                    <li key={index}>
                        {/* Delete button */}
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>

                        {/*Move up button */}
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}
                        >
                            👆
                        </button>

                        {/* Move down button */}
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}
                        >
                            👇
                        </button>
                    </li>    

                )}
            </ol>
            :
            <h4>Please enter your daily tasks</h4>}
            
        </div>)
}

export default ToDoList;
