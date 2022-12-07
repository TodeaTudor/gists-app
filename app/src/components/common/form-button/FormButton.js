import styles from "./FormButton.module.css";

const FormButton = (props) => {

  const classes = props.classes ? styles.button + ' ' + props.classes : styles.button;

  return (
    <>
      <button type={props.type} className={classes} onClick={props.onClick}>{props.children}</button>
    </>
  );
}

export default FormButton;
