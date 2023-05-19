import React, { useContext, useEffect, useState } from 'react';
import styles from './SearchBox.module.scss';
import { NotesContext } from '../../NotesContext';
import useDebounce from '../../hooks/useDebounce';

const SearchBox = () => {
  const { initialNotes, setNotes } = useContext(NotesContext);
  const [searchText, setSearchText] = useState('');

  const debouncedSearchText = useDebounce(searchText);

  useEffect(() => {
    const handleNoteSearch = () => {
      const searchValue = debouncedSearchText.toLowerCase();

      if (searchValue === '') {
        setNotes(initialNotes);
        return;
      }

      const filteredNotes = initialNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchValue) ||
          note.body.toLowerCase().includes(searchValue)
      );
      setNotes(filteredNotes);
    };

    handleNoteSearch();
  }, [searchText, initialNotes, setNotes, debouncedSearchText]);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <input
      placeholder='Search'
      className={styles.search}
      value={searchText}
      onChange={handleInputChange}
    />
  );
};

export default SearchBox;
