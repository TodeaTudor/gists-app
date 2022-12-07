import GistFiles from "./GistFiles";
import styles from './GistListItem.module.css';
import {useApi} from "../../../hooks/use-api";
import {formatGetGistFileContent, formatGetGistForks} from "../../../lib/gists-request-formatter";
import GistFileContent from "./GistFileContent";
import {useEffect, useState} from "react";
import GistForksList from "./GistForksList";

const GistListItem = (props) => {

  const [selectedFile, setSelectedFile] = useState('');

  const {result: fileContent, sendRequest: getFileContent} = useApi();
  const {result: forks, sendRequest: getGistForks} = useApi();

  useEffect(() => {
    const getForks = async () => {
      await getGistForks({
        requestData: formatGetGistForks(props.gist.id),
      });
    }

    getForks();
  }, [getGistForks, props.gist.id]);

  const handleFileContentRequest = async (fileUrl, fileName) => {
    await getFileContent({
      requestData: formatGetGistFileContent(fileUrl),
    });

    setSelectedFile(fileName);
  }

  return (
    <li key={props.gist.id} className={styles['gist-list-item-container']}>
      <GistFiles handleFileContentRequest={handleFileContentRequest} gistFiles={props.gist.files}/>
      {selectedFile !== '' && <GistFileContent fileName={selectedFile} fileContent={fileContent}/>}
      {forks.length > 0 && <GistForksList forks={forks}/>}
    </li>
  )
}

export default GistListItem;
