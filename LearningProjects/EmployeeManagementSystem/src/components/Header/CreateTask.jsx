import React from 'react'

function CreateTask() {
  return (
    <div className="mt-10 flex justify-center">
        <form
          className="flex flex-col gap-6 bg-transparent shadow-lg rounded-xl p-8 w-full max-w-4xl border border-gray-700"
        >
          {/* Top Inputs Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Task Name</h3>
              <input
                type="text"
                placeholder="Name a task"
                className="w-full px-4 py-2 border border-gray-700 rounded-lg outline-none focus:ring-2  bg-black text-white placeholder-gray-400"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Date</h3>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-700 rounded-lg outline-none focus:ring-2 bg-black text-white placeholder-gray-400"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Assigned To</h3>
              <input
                type="text"
                placeholder="Employee Name"
                className="w-full px-4 py-2 border border-gray-700 rounded-lg outline-none focus:ring-2 bg-black text-white placeholder-gray-400"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Category</h3>
              <input
                type="text"
                placeholder="Task..."
                className="w-full px-4 py-2 border border-gray-700 rounded-lg outline-none focus:ring-2 bg-black text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <textarea
              cols={30}
              rows={6}
              placeholder="Describe the task..."
              className="w-full px-4 py-2 border border-gray-700 rounded-lg outline-none focus:ring-2 bg-black text-white placeholder-gray-400"
            ></textarea>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 text-black font-semibold rounded-lg shadow hover:bg-emerald-400 hover:font-bold transition-all"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask