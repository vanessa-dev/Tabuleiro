import styles from '../styles/Subdivisao.module.css';
 const Subdivisao = (props) => {
  return (
    <div 
      style={{backgroundColor: props.preta ? '#000' : '#fff'}}
      className={styles.subdivisao}>
  
    </div>
  );

}
export default Subdivisao;