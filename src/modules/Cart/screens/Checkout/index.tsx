import React from 'react';

import CheckoutServiceComponent from './index.service';
import CheckoutComponent from './index.ui';

const CheckoutService = () => (
  <CheckoutServiceComponent>
    {(props: any) => <CheckoutComponent {...props} />}
  </CheckoutServiceComponent>
);

export default CheckoutService;
