import styles from './GistsForm.module.css'
import FormInput from "../../common/form-input/FormInput";
import FormButton from "../../common/form-button/FormButton";
import { useState } from "react";
import SelectDropdown from "../../common/select-dropdown/SelectDropdown";
import {GISTS_PER_PAGE_DEFAULT_VALUE, GISTS_PER_PAGE_VALUES} from "../../../lib/gists/gists-constants";

const GistsForm = (props) => {
  const [username, setUsername] = useState('');
  const [gistsPerPage, setGistsPerPage] = useState(GISTS_PER_PAGE_DEFAULT_VALUE);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitForm(username, gistsPerPage);
  }

  const handleDropdownChange = (event) => {
    setGistsPerPage(event.target.value);
  }

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit} className={styles["form"]}>
        <FormInput handleOnChange={handleInputChange} label="Github Username"/>
        <span className={styles['text-style']}>Gists per page </span>
        <SelectDropdown handleDropdownChange={handleDropdownChange} selectedValue={gistsPerPage} values={GISTS_PER_PAGE_VALUES}/>
        <FormButton type="submit">Get Gists</FormButton>
      </form>
    </div>
  )
}

export default GistsForm;
