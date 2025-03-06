import React from 'react';
import styles from './styles.module.css'

const ButtonGeneric1 = ({props}) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonGeneric1}>
        {props.text}
      </button>
    </div>
  );
}


export default ButtonGeneric1;
