import React from 'react';
import Searchbox from '../searchBox/SearchBox';
import AddButton from '../buttons/AddButton';
import DeleteButton from '../buttons/DeleteButton';
import styles from './Header.module.scss';

const Header = React.memo(() => {
  return (
    <header className={styles.header}>
      <div className={styles.button_box}>
        <AddButton />
        <DeleteButton />
      </div>
      <Searchbox />
    </header>
  );
});

export default Header;
