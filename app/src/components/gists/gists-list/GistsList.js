import GistListItem from "../gist-list-item/GistListItem";
import styles from './GistList.module.css';

const GistsList = (props) => {

  return (
    <div className={styles['gist-list-container']}>
      <ul className={styles['ul']}>
        {props.gists.map((gist) => {
          return (
            <GistListItem key={gist.id} gist={gist}/>
          );
        })}
      </ul>
    </div>
  )
}

export default GistsList;
