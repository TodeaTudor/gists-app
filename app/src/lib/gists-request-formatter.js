import {GISTS_API_URL} from "./constants";

export const formatGetGistsByUsername = (username, gistsPerPage) => {
  return {
    url: `${GISTS_API_URL}/users/${username}/gists?per_page=${gistsPerPage}`,
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github+json',
    },
  };
}

export const formatGetGistFileContent = (fileUrl) => {
  return {
    url: `${fileUrl}`,
    method: 'GET',
    headers: {
      'Accept': 'application/text',
    },
  };
}

export const formatGetGistForks = (gistId) => {
  return {
    url: `${GISTS_API_URL}/gists/${gistId}/forks`,
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github+json',
    },
  };
}
