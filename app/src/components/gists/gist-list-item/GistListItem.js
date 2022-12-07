import GistFiles from "./GistFiles";
import styles from './GistListItem.module.css';
import {useApi} from "../../../hooks/use-api";
import {formatGetGistFileContent} from "../../../lib/gists-request-formatter";
import GistFileContent from "./GistFileContent";
import {useState} from "react";

const GistListItem = (props) => {

  const [selectedFile, setSelectedFile] = useState('');
  const {result, sendRequest: getFileContent} = useApi();

  const handleFileContentRequest = async (fileUrl, fileName) => {
    await getFileContent({
      requestData: formatGetGistFileContent(fileUrl),
    });

    setSelectedFile(fileName);
  }

  return (
    <li key={props.gist.id} className={styles['gist-list-item-container']}>
      <GistFiles handleFileContentRequest={handleFileContentRequest} gistFiles={props.gist.files}/>
      {selectedFile !== '' && <GistFileContent fileName={selectedFile} fileContent={result}/>}
    </li>
  )
}

export default GistListItem;
