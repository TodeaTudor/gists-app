import FileExtensionBadge from "./FileExtensionBadge";
import styles from './GistFileCard.module.css';

const GistFileCard = (props) => {

  const handleGetFileContent = () => {
    props.handleFileContentRequest(props.file.content_url, props.file.fileName);
  }

  return (
    <span onClick={handleGetFileContent} className={styles['file-card-container']}>
      <FileExtensionBadge file={props.file}/>
      <span>{props.file.fileName}</span>
    </span>
  )
}

export default GistFileCard;
