import React, { useContext } from 'react';
import { NotesContext } from '../../NotesContext';
import styles from './Sidebar.module.scss';
import NoteItem from '../noteItem';

const Sidebar = () => {
  const { notes, activeNote, setActiveNote } = useContext(NotesContext);
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <aside className={styles.app_sidebar}>
      <div className={styles.app_sidebar_notes}>
        {sortedNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
