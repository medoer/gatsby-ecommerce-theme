import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'全球免运费'}
        subtitle={''}
      />
      <Attribute
        icon={'cycle'}
        title={'退货'}
        subtitle={'30天内可退货'}
      />
      <Attribute
        icon={'creditcard'}
        title={'加密支付'}
        subtitle={'安全购物'}
      />
    </div>
  );
};

export default AttributeGrid;
