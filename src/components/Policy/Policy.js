import React from 'react';
import * as styles from './Policy.module.css';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h3>联系我们免运费退货</h3>
        <p>
          如果您购买的产品遇到问题，请及时联系我们，可免运费退货。
        </p>
      </div>
    </div>
  );
};

export default Policy;
