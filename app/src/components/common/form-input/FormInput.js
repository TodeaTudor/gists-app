import styles from './FormInput.module.css'

const FormInput = (props) => {

  return (
    <>
      <label htmlFor="genericInput" className={styles['generic-label']}>{props.label}</label>
      <input id="genericInput" type={props.type} placeholder={props.placeholder} className={styles['generic-input']} value={props.value} onChange={props.handleOnChange}/>
    </>
  );
}

export default FormInput;
