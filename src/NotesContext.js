import { createContext, useEffect, useState } from 'react';
import { getAllNotes } from './dataBase/db';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const notesFromDB = await getAllNotes();
      setNotes(notesFromDB);
    };

    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, selectedNote, setSelectedNote }}>
      {children}
    </NotesContext.Provider>
  );
};
