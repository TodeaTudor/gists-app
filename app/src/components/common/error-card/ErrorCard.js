import style from './ErrorCard.module.css';


const ErrorCard = (props) => {

  return (
    <div className={style['error-card']}>
      <span className={style['error-text']}>{props.children}</span>
    </div>
  )
}

export default ErrorCard;
