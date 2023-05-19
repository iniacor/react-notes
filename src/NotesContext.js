import { createContext, useEffect, useState } from 'react';
import { getAllNotes } from './dataBase/db';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [initialNotes, setInitialNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };
  const selectedNote = getActiveNote();

  useEffect(() => {
    const fetchNotes = async () => {
      const notesFromDB = await getAllNotes();
      setNotes(notesFromDB);
      setInitialNotes(notesFromDB);
    };

    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        initialNotes,
        notes,
        setNotes,
        activeNote,
        setActiveNote,
        selectedNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
