/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the CC-BY-4.0 license found
 * in the LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
*/

'use strict';

import Link from 'gatsby-link';
import React from 'react';
import {colors} from 'theme';

const FooterLink = ({children, target, to}) => (
  <Link
    css={{
      lineHeight: 2,
      ':hover': {
        color: colors.brand,
      },
    }}
    to={to}
    target={target}>
    {children}
  </Link>
);

export default FooterLink;
