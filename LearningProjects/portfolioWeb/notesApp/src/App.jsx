import React, { useState, useEffect } from 'react'
import NoteCard from './components/NoteCard'
import NoteForm from './components/NoteForm'
import Typewriter from "./components/TypeWriter.jsx";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF9A8B] via-[#FF6A88] to-[#C56CD6] text-gray-800 flex flex-col items-center py-10 px-4 transition-all duration-500">
      <h1 className="text-4xl font-extrabold mb-10 text-white drop-shadow-lg tracking-wide">
        💾 <Typewriter text="My Notes App" speed={90} />
      </h1>

      <div className="w-full max-w-4xl bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white/40">
        <NoteForm setNotes={setNotes} />

        {notes.length === 0 ? (
          <p className="text-gray-700 text-center mt-10 text-lg italic">
            No notes yet. Add your first one above!
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} setNotes={setNotes} notes={notes} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
