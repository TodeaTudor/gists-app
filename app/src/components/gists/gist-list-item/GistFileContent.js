import styles from './GistFileContent.module.css'

const GistFileContent = (props) => {

  return (
    <div className={styles['file-content-container']}>
      <span>File content of <b>{props.fileName}</b></span>
      <hr/>
      <input type="text" value={props.fileContent} readOnly={true} className={styles['file-content-text-box']}/>
    </div>
  );
}

export default GistFileContent;
