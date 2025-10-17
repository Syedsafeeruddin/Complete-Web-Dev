import React, { useState } from 'react'

const NoteForm = ({ setNotes }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title.trim() && content.trim()){
            setNotes((prevNotes) => [
                ...prevNotes,
                { id: Date.now(), title, content }
            ])
        }
        setTitle("")
        setContent("")
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 bg-white/50 p-5 rounded-xl backdrop-blur-md border border-white/40 shadow-md"
            >
            <input 
                type="text"
                placeholder='Enter Note Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-3 rounded-lg bg-white/70 text-gray-800 border border-white/50 focus:ring-2 focus:ring-pink-300 outline-none w-30% max-w-md placeholder-gray-400 shadow-sm"
            />
            <input 
                type="text"
                placeholder='Enter Note Content...'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="p-3 rounded-lg bg-white/70 text-gray-800 border border-white/50 focus:ring-2 focus:ring-pink-300 outline-none w-full max-w-md placeholder-gray-400 shadow-sm"
            />
            <button 
                type="submit"
                className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-semibold px-5 py-3 rounded-lg shadow-lg hover:shadow-pink-200 transition-transform hover:scale-105"
            >
                +
            </button>
            </form>
        </div>
    )
}

export default NoteForm
