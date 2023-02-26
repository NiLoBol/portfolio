import React, { useState } from 'react'

function Todostate() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const handleSubmit = () => {
        setTodos([...todos, todo])
        setTodo('')
    }

    const handleDelete = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div>
            <h1 className='text-center my-5'>Todo List</h1>
            <div class="mb-3">
                <label for="" class="form-label">Todo List</label>
                <div className='row '>
                    <input type="text"
                        class="form-control col-8"
                        name="todolist"
                        id="todolist"
                        aria-describedby="helpId"
                        placeholder="write your List"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type="button" name="" id="" class="btn btn-primary col-1" onClick={handleSubmit}>Button</button>
                </div>
            </div>
            <div className="row">
                {todos.map((t, index) => (
                    <div className="card col-3 m-3" key={index}>
                        <div className="card-body d-flex align-items-center justify-content: space-between">
                            <h5 className="card-title mr-auto">{t}</h5>
                            <button type="button" className="btn btn-danger ml-auto" onClick={() => handleDelete(index)}>x</button>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )



}

export default Todostate
