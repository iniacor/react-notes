import React, { useContext } from 'react';
import { NotesContext } from '../../NotesContext';
import styles from './Workspace.module.scss';
import { prepareDate } from '../../common/utils/dateUtils';
import { updateNote } from '../../dataBase/db';

const Workspace = () => {
  const { notes, setNotes, selectedNote } = useContext(NotesContext);

  const onUpdateNote = async (updatedNote) => {
    try {
      await updateNote(updatedNote);
      const updatedNotesArr = notes.map((note) => {
        if (note.id === updatedNote.id) {
          return updatedNote;
        }
        return note;
      });
      setNotes(updatedNotesArr);
    } catch (error) {
      console.error('Error deleting note', error);
    }
  };

  const onEditField = (field, value) => {
    const updatedNote = {
      ...selectedNote,
      [field]: value,
      lastModified: Date.now(),
    };
    onUpdateNote(updatedNote);
  };

  if (!selectedNote)
    return <div className={styles.no_active_note}>No Active Note</div>;

  return (
    <main className={styles.app_workspace}>
      {selectedNote && (
        <div>
          <div className={styles.date_wrapper}>
            {prepareDate(selectedNote.lastModified)}
          </div>
          <input
            className={styles.note_title}
            type='text'
            id='title'
            placeholder='Note Title'
            value={selectedNote.title}
            onChange={(e) => onEditField('title', e.target.value)}
            autoFocus
          />
          <textarea
            className={styles.note_content}
            id='body'
            placeholder='Write your note here...'
            value={selectedNote.body}
            onChange={(e) => onEditField('body', e.target.value)}
          />
        </div>
      )}
    </main>
  );
};

export default Workspace;
