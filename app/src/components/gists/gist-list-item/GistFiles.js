import {formatGistFiles} from "../../../lib/gists-formatter";
import GistFileCard from "./GistFileCard";
import styles from './GistFiles.module.css';

const GistFiles = (props) => {

  const files = formatGistFiles(props.gistFiles);

  return (
    <>
      <p>Gist files:</p>
      <ul className={styles['ul']}>
        {files.map((file) => {
          return (
            <li className={styles['.li']}>
              <GistFileCard file={file}/>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default GistFiles;
