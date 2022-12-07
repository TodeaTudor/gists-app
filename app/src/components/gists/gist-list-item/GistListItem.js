import GistFiles from "./GistFiles";
import styles from './GistListItem.module.css';

const GistListItem = (props) => {

  return (
    <li key={props.gist.id} className={styles['gist-list-item-container']}>
      <GistFiles gistFiles={props.gist.files}/>
    </li>
  )
}

export default GistListItem;
