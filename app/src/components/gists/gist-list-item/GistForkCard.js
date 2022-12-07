import styles from './GistForkCard.module.css'

const GistForkCard = (props) => {

  return (
    <span className={styles['fork-card-container']}>
      <img src={props.fork.owner.avatar_url} alt="avatar" className={styles['fork-card-avatar']}/>
      <span>{props.fork.owner.login}</span>
    </span>
  )
}

export default GistForkCard;
