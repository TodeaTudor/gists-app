import GistsForm from "../components/gists/GistsForm";
import {useApi} from "../hooks/use-api";
import {formatGetGistsByUsername} from "../lib/gists-request-formatter";

const GistsListingPage = () => {

  const { isLoading, error, sendRequest: requestGists } = useApi();

  const submitForm = (username) => {
    requestGists({
      requestData: formatGetGistsByUsername(username),
    });

  }

  return (
    <>
      <GistsForm submitForm={submitForm}/>
      {isLoading && <p>Loading....</p>}
      {error && <p>We have a problem</p>}
    </>
  );
}

export default GistsListingPage;
