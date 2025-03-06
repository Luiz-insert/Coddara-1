import React, { Fragment } from 'react'
import styles from './styles.module.css'
import logo from '../../../assets/coddara_logo.svg'
import Button from './Components/ButtonContact/Button'
import ButtonGeneric1 from './Components/ButtonGeneric1'
export default function Header() {
 

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.groupLogo}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.groupTitle}>
            <p className={styles.title}>Single Page Application</p>
          </div>
        </div>
        <div className={styles.groupBtns}>
            <ButtonGeneric1 props={{text: 'Products'}} />
            <ButtonGeneric1 props={{text: 'Solutions'}} />
            
            <ButtonGeneric1 props={{text: 'Pricing'}} />
            <Button props={{text: 'Contato'}} />
            
        </div>
        <div className={styles.backgroundFade}></div>
      </header>
    </Fragment>
  )
}



