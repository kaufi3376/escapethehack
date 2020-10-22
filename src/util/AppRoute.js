import React from 'react';
import { Route } from 'react-router-dom';


/**
 * 
 * A Wrapper Component that wrapps a layout and a component
 * 
 * @param {
 * 
 * } param0 
 */


const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {

  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
  );
}

export default AppRoute;