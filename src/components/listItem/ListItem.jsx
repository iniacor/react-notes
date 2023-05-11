import styles from './ListItem.module.scss';

const ListItem = (note) => {
  const { title, text, createdAt } = note;
  return (
    <div className={styles.item_wrapper}>
      <h4>{title}</h4>
      <div className={styles.text_wrapper}>
        <span>{createdAt.toLocaleDateString()}</span>
        {text}
      </div>
    </div>
  );
};

export default ListItem;
