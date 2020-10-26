import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppRoute from "./AppRoute"
import {AuthContext} from "./AuthContext"




const ProtectedRoute = ({ component: Component, layout: Layout, ...rest }) => {

    const authCon = useContext(AuthContext)

    return (
      <Route {...rest} render={
        props => {
          if (authCon.isAuth) {
            return (
                <Layout>
                  <Component {...props} />
                </Layout>
              )
          } else {
            return <Redirect to={
              {
                pathname: '/',
                state: {
                  from: props.location
                }
              }
            } />
          }
        }
      } />
    )
  }

export default ProtectedRoute;