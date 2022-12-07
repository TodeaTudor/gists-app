import styles from './GistFileContent.module.css'

const GistFileContent = (props) => {

  return (
    <div className={styles['file-content-container']}>
      <span>File content of <b>{props.fileName}</b></span>
      <hr/>
      <p className={styles['file-content-text-box']}>{props.fileContent}</p>
    </div>
  );
}

export default GistFileContent;
