import React, { useContext } from 'react';
import uuid from 'react-uuid';
import { GoPlus } from 'react-icons/go';
import styles from './Buttons.module.scss';
import { NotesContext } from '../../NotesContext';
import { createNote } from '../../dataBase/db';

const AddButton = () => {
  const { notes, setNotes, setActiveNote } = useContext(NotesContext);

  const handleAddNote = async () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now(),
    };

    try {
      createNote(newNote);
      setActiveNote(false);
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error creating note', error);
    }
  };

  return (
    <button className={styles.add_btn} onClick={handleAddNote}>
      <GoPlus />
    </button>
  );
};

export default AddButton;
