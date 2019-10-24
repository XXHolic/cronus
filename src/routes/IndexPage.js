import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
// import RichText from '../components/RichText/index';

function IndexPage({history}) {
  console.info(history);
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <ul className={styles.list}>
        <li><a href="#/products">Products</a></li>
        <li><a href="#/count">Count</a></li>
      </ul>
      {/* <RichText></RichText> */}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
