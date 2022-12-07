import GistListItem from "../gist-list-item/GistListItem";
import styles from './GistLists.module.css';

const GistsList = (props) => {

  return (
    <ul className={styles['ul']}>
      {props.gists.map((gist) => {
        return (
          <GistListItem gist={gist}/>
        );
      })}
    </ul>
  )
}

export default GistsList;
