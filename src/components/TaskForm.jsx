import React, { useState } from 'react'

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
    console.log(task)
  }

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10 ">
        <h2 className="mb-7 text-3x1">Add new task</h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <textarea
            name="description"
            rows="2"
            placeholder="Type a desctription"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
          Add task
        </button>
      </form>
    </div>
  )
}

export default TaskForm
