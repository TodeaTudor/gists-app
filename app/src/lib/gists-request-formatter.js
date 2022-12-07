import {GISTS_API_URL} from "./constants";

export const formatGetGistsByUsername = (username) => {
  return {
    url: `${GISTS_API_URL}/users/${username}/gists`,
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github+json',
    },
  };
}
