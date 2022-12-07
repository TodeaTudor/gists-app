import GistsForm from "../components/gists/gists-form/GistsForm";
import {useApi} from "../hooks/use-api";
import {formatGetGistsByUsername} from "../lib/gists-request-formatter";
import ErrorCard from "../components/common/error-card/ErrorCard";
import LoadingSpinner from "../components/common/loading-spinner/LoadingSpinner";
import GistsList from "../components/gists/gists-list/GistsList";
import {GET_GISTS_EMPTY_MESSAGE, GET_GISTS_ERROR_MESSAGE} from "../lib/constants";

const GistsListingPage = () => {

  const { isLoading, result: returnedGists, error, sendRequest: requestGists } = useApi();

  const submitForm = (username) => {
    requestGists({
      requestData: formatGetGistsByUsername(username),
    });

  }

  return (
    <>
      <GistsForm submitForm={submitForm}/>
      {isLoading && <LoadingSpinner/>}
      {error && <ErrorCard message={GET_GISTS_ERROR_MESSAGE}/>}
      {returnedGists.length === 0 && <ErrorCard message={GET_GISTS_EMPTY_MESSAGE}/>}
      {returnedGists.length > 0 && <GistsList gists={returnedGists}/>}
    </>
  );
}

export default GistsListingPage;
