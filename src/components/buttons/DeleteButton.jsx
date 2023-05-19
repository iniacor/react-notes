import React, { useContext } from 'react';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { NotesContext } from '../../NotesContext';
import { deleteNote } from '../../dataBase/db';
import styles from './Buttons.module.scss';

const DeleteButton = () => {
  const { setNotes, activeNote, notes, selectedNote } =
    useContext(NotesContext);

  const handleDeleteNote = async (noteId) => {
    try {
      await deleteNote(noteId);
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error deleting note', error);
    }
  };

  const idForDelete = selectedNote && selectedNote.id;

  return (
    <button
      className={styles.delete_btn}
      disabled={!activeNote}
      onClick={() => handleDeleteNote(idForDelete)}
    >
      <RiDeleteBin4Line />
    </button>
  );
};

export default DeleteButton;
