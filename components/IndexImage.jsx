import React from 'react'
import Image from 'next/image';
import styles from './IndexImage.module.css';

// 

const IndexImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageDiv}>
        <Image
            src="https://images.unsplash.com/photo-1616212171623-901340f85e98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
            className={styles.imageStyle}
            layout="fill"
       />
      </div>
      <div className={styles.imageDiv}>
        <Image
          src="https://images.unsplash.com/photo-1616208470065-d177188936ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
          className={styles.imageStyle}
          layout="fill"  
        />
      </div>
      </div>
  )
}

export default IndexImage
