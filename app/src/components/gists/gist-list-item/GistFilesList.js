import {formatGistFiles} from "../../../lib/gists-formatter";
import GistFileCard from "./GistFileCard";
import styles from './GistFilesList.module.css';

const GistFilesList = (props) => {

  const files = formatGistFiles(props.gistFiles);

  return (
    <>
      <p><b>Gist Files</b>:</p>
      <ul className={styles['ul']}>
        {files.map((file, index) => {
          return (
            <li key={index} className={styles['.li']}>
              <GistFileCard handleFileContentRequest={props.handleFileContentRequest} file={file}/>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default GistFilesList;
