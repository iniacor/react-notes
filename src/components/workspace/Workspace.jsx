import React, { useContext } from 'react';
import { NotesContext } from '../../NotesContext';
import styles from './Workspace.module.scss';
import { format } from 'date-fns';

const Workspace = () => {
  const { selectedNote } = useContext(NotesContext);
  const date = new Date();

  function prepareDate(date) {
    return format(new Date(date), 'dd.MM.yyyy HH:MM');
  }

  return (
    <main className={styles.workspace_wrapper}>
      <div className={styles.date_wrapper}>{prepareDate(date)}</div>
      {selectedNote && (
        <div>
          <h2>{selectedNote.title}</h2>
          <p>Created: {selectedNote.createdAt}</p>
          <p>{selectedNote.text}</p>
        </div>
      )}
      <div contentEditable></div>
    </main>
  );
};

export default Workspace;
