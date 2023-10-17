import React from 'react';

import ProductServiceComponent from './index.service';
import ProductComponent from './index.ui';

const ProductService = () => (
  <ProductServiceComponent>
    {(props: any) => <ProductComponent {...props} />}
  </ProductServiceComponent>
);

export default ProductService;
