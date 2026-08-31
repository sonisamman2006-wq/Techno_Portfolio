import React, { useState, useEffect } from "react";
import "./Note.css";

const Note = () => {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (text.trim() === "") return;

    setNotes([...notes, text]);
    setText("");
  };

  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">🎓</div>

        <h1>Student Notes App</h1>

        <p className="subtitle">
          Quickly capture and persist your study notes locally.
        </p>

        <div className="input-box">
          <input
            type="text"
            placeholder="Write a note..."
            maxLength={150}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <span>{text.length}/150</span>
        </div>

        <button onClick={addNote}>Add Note +</button>

        <div className="heading">
          <h2>Your Saved Notes</h2>
          <div className="count">{notes.length} notes</div>
        </div>

        {notes.length === 0 ? (
          <div className="empty">
            <div className="clipboard">📋</div>

            <h3>No notes saved yet</h3>

            <p>
              Enter a note above and click "Add Note" to start saving your
              ideas!
            </p>
          </div>
        ) : (
          <div className="notes">
            {notes.map((note, index) => (
              <div className="note" key={index}>
                <p>{note}</p>

                <button
                  className="delete"
                  onClick={() => deleteNote(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <hr />

        <p className="footer">
          Notes are automatically saved to your browser's Local Storage.
        </p>
      </div>
    </div>
  );
};

export default Note;