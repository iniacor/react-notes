import React from 'react';
import styles from './NoteItem.module.scss';

const NoteItem = React.memo(({ note, activeNote, setActiveNote }) => {
  const { id, title, body, lastModified } = note;
  return (
    <div
      className={`${styles.app_sidebar_note} ${
        id === activeNote && styles.active
      }`}
      onClick={() => setActiveNote(id)}
    >
      <h2 className={styles.sidebar_note_title}>{title}</h2>
      <p>{body && body.substr(0, 100) + '...'}</p>
      <small className={styles.note_meta}>
        {new Date(lastModified).toLocaleString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}
      </small>
    </div>
  );
});

export default NoteItem;
