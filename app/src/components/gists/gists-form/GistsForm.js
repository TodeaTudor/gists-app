import styles from './GistsForm.module.css'
import FormInput from "../../common/form-input/FormInput";
import FormButton from "../../common/form-button/FormButton";
import { useState } from "react";

const GistsForm = (props) => {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitForm(username);
  }

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={handleSubmit} className={styles["form"]}>
        <FormInput handleOnChange={handleInputChange} label="Github Username"/>
        <FormButton type="submit">Get Gists</FormButton>
      </form>
    </div>
  )
}

export default GistsForm;
