import React from "react";

const NoteCard = ({ note, setNotes }) => {

    const deleteNote = (id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    };

    return (
        <div className="bg-white/70 border border-white/40 rounded-2xl p-5 hover:border-pink-400 transition-all hover:scale-105 shadow-md hover:shadow-pink-200 flex flex-col justify-between h-full max-h-80 overflow-hidden backdrop-blur-md">
            <div className="overflow-hidden">
                <h2 className="text-xl font-semibold text-purple-600 mb-2 truncate">
                    {note.title}
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4 overflow-y-auto max-h-40 text-wrap break-words pr-1 scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-transparent">
                    {note.content}
                </p>
            </div>

            <button
                onClick={() => deleteNote(note.id)}
                className="bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-pink-200 transition-transform hover:scale-105 mt-auto"
            >
                Delete
            </button>
        </div>
    );
};

export default NoteCard;
