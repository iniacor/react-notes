import React, { useContext } from 'react';
import { NotesContext } from '../../NotesContext';
import ListItem from '../listItem/ListItem';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const { notes } = useContext(NotesContext);
  console.log(notes);

  return (
    <aside className={styles.aside}>
      {notes.map((note) => (
        <ListItem key={note.id} {...note} />
      ))}
    </aside>
  );
};

export default Sidebar;
