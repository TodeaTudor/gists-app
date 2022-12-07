import styles from './FormInput.module.css'

const FormInput = (props) => {

  const classes = props.classes ? styles + ' ' + props.classes : styles.input;

  return (
    <>
      <label htmlFor="genericInput">{props.label}</label>
      <input id="genericInput" type={props.type} placeholder={props.placeholder} className={classes} value={props.value} onChange={props.handleOnChange}/>
    </>
  );
}

export default FormInput;
