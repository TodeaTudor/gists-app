import FileExtensionBadge from "./FileExtensionBadge";
import styles from './GistFileCard.module.css';

const GistFileCard = (props) => {

  return (
    <span className={styles['file-card-container']}>
      <FileExtensionBadge file={props.file}/>
      <span>{props.file.fileName}</span>
    </span>
  )
}

export default GistFileCard;
