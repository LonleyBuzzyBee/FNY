import React, { useContext } from 'react';
import { AuthContext } from './Auth'
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        // !!currentUser ? (
          <RouteComponent {...routeProps} />
        // ) : (
        //   <Redirect to={"/list"} />
        // )
      }
    />
  );
};

export default PrivateRoute;


// _______________old code/ undecided________________________
// export default function RouteWrapper({
//   component: Component,
//   isPrivate,
//   ...rest
// }) {
//   let signed = false;

//   if (currentUser.email === "admin@email.com") {
//     signed = true;
//   }
//   // redirect user to (signin) if he tries to access a private route w/out authentication 
//   if (isPrivate && !signed) {
//     return <Redirect to="/signin" />;
//   }

//   // redirect user to main page if he tries to access a public route(signIn or signUp) fter being authenticated.

//   if (!isPrivate && signed) {
//     return <Redirect to="/list" />
//   }

//   // if not on both prevuis cases, redirect user to the desired route
//   return <Route {...rest} component={Component} />;
// }

// RouteWrapper.propTypes = {
//   isPrivate: PropTypes.bool,
//   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
// };

// RouteWrapper.defaultProps = {
//   isPrivate: false
// };