import React from 'react';

import styles from './BannerImage.css';

function BannerImage(props) {
  return (
    <img src={props.src} className={styles.bannerImage} />
  )
}

export default BannerImage;
