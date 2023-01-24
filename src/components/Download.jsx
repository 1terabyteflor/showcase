import React from 'react'
import assets from '../assets'
import styles from '../styles/Globals'

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Get the full Source Code on Github</p>
          <button className={styles.btnPrimary}>Source code</button>
          <img 
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}/>
        </div>
      </div>
    </div>
  )
}

export default Download