import React from 'react';

const Layout = ({content = () => null }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        {content()}
      </div>
    </div>
  </div>
);

export default Layout;
