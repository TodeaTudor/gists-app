import {mapFileExtensionToColor} from "../../../lib/gists/gists-formatter";
import styles from './FileExtensionBadge.module.css';

const FileExtensionBadge = (props) => {

  const fileBadgeColor = mapFileExtensionToColor(props.file.extension);

  return (
    <span style={{backgroundColor: fileBadgeColor}} className={styles['badge-container']}>{props.file.extension}</span>
  )
}

export default FileExtensionBadge;
