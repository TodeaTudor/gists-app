import {formatGistFiles} from "../../../lib/gists/gists-formatter";
import GistFileCard from "./GistFileCard";
import styles from './GistFilesList.module.css';

const GistFilesList = (props) => {

  const files = formatGistFiles(props.gistFiles);

  return (
    <>
      <p><b>Gist Files</b>:</p>
      <ul className={styles['list']}>
        {files.map((file, index) => {
          return (
            <li key={index}>
              <GistFileCard handleFileContentRequest={props.handleFileContentRequest} file={file}/>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default GistFilesList;
