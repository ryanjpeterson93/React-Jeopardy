import React, {Fragment} from 'react';
import { Link, } from 'react-router-dom';
import { PageHeader } from 'antd';

const NoMatch = () => (
  <Fragment>
    <PageHeader
      className="site-page-header"
      // onBack={() => null}
      title="No Match"
      subTitle="There is nothing to see here!"
    />
    <Link to="/"> Home</Link>
  </Fragment>
)

export default NoMatch;