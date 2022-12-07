import {DEFAULT_COLOR, JAVA_COLOR, JS_COLOR, MD_COLOR, PY_COLOR, TXT_COLOR} from "./gists-constants";

export const formatGistFiles = (gistFilesObject) => {
  const gistFiles = [];

  for (const fileName in gistFilesObject) {
    gistFiles.push({
      fileName: fileName.split('.').at(0),
      content_url: gistFilesObject[fileName].raw_url,
      extension: fileName.split('.').at(-1),
    })
  }

  return gistFiles;
}

export const mapFileExtensionToColor = (extension) => {
  // to improve - add more cases and more colors
  switch (extension) {
    case 'js':
      return JS_COLOR;
    case 'py':
      return PY_COLOR;
    case 'txt':
      return TXT_COLOR;
    case 'java':
      return JAVA_COLOR;
    case 'md':
      return MD_COLOR;
    default:
      return DEFAULT_COLOR;
  }
}

export const getMostRecentForks = (forks, limit) => {
  forks.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return forks.slice(-limit);
}
