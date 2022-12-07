import GistForkCard from "./GistForkCard";
import styles from './GistForksList.module.css';
import {getMostRecentForks} from "../../../lib/gists-formatter";
import {NUMBER_OF_MOST_RECENT_FORKS} from "../../../lib/constants";

const GistForksList = (props) => {

  return (
    <>
      <p><b>Gist forks</b>:</p>
      <ul className={styles['ul']}>
        {getMostRecentForks(props.forks, NUMBER_OF_MOST_RECENT_FORKS).map((fork, index) => {
          return (
            <li key={index}>
              <GistForkCard fork={fork}/>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default GistForksList;
