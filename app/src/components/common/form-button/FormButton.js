import styles from "./FormButton.module.css";

const FormButton = (props) => {

  return (
    <button type={props.type} className={styles['generic-button']} onClick={props.onClick}>{props.children}</button>
  );
}

export default FormButton;
