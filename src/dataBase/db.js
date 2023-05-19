import { openDB } from 'idb';

const DB_NAME = 'notesDB';
const STORE_NAME = 'notes';

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      const notesStore = db.createObjectStore(STORE_NAME, {
        keyPath: 'id',
        autoIncrement: true,
      });
      notesStore.createIndex('titleIndex', 'title', { unique: false });
    }
  },
});

export const getAllNotes = async () => {
  try {
    const db = await dbPromise;
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const notes = await store.getAll();
    return notes;
  } catch (error) {
    console.error('Error retrieving notes', error);
    throw error;
  }
};

export const createNote = async (note) => {
  try {
    const db = await dbPromise;
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.add(note);

    await new Promise((resolve, reject) => {
      request.onsuccess = resolve;
      request.onerror = reject;
    });

    const notes = await getAllNotes();
    return notes;
  } catch (error) {
    console.error('Error creating note', error);
    throw error;
  }
};

export const updateNote = async (note) => {
  try {
    const db = await dbPromise;
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    await store.put(note);
    const notes = await getAllNotes();
    return notes;
  } catch (error) {
    console.error('Error updating note', error);
    throw error;
  }
};

export const deleteNote = async (noteId) => {
  try {
    const db = await dbPromise;
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    await store.delete(noteId);
    const notes = await getAllNotes();
    return notes;
  } catch (error) {
    console.error('Error deleting note', error);
    throw error;
  }
};
