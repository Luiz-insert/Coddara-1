import React from 'react'
import styles from './styles.module.css'
import { useTitulo } from '../../../hooks'

export default function Card({ props }) {


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.groupPartUp}>
                    <div className={styles.sideBarAux}></div>
                    <div className={styles.groupImage}>
                        <img src={props.imageSpaLogo} className={styles.imageSpaLogo} alt="card" />
                    </div>
                    <div className={styles.groupTitle}>
                        <p className={styles.title}>{props.title}</p>
                        <p className={styles.description}>{props.description}</p>
                    </div>
                </div>
                <div className={styles.groupPartDown}>
                    <div className={styles.card}>
                        <img src={props.imageMonitor} alt="monitor" />
                        <img src={props.imageNotebook} alt="notebook" />
                        <img src={props.imageSmartphone} alt="smartphone" />
                    </div> 
                </div>
                <div className={styles.description2}>{props.description2}</div>
                <div className={styles.waterMark}>
                    {/* <p className={styles.waterMarkText1}>SPA Lab</p> <div className={styles.waterMarkLine}></div> <p className={styles.waterMarkText2}>Coddara</p> */}
                </div>
            </div>
        </div>
    )
}