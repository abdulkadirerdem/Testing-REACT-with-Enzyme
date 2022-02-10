/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";

// redux
import { connect } from "react-redux";

// react-router
import { useNavigate } from "react-router-dom";

export default (props) => {
  let navigate = useNavigate();

  const shouldNavigateAway = () => {
    if (!props.auth) {
      navigate("/");
    }
  };

  useEffect(() => {
    shouldNavigateAway();
  }, [props.auth]);

  const ComposedComponent = () => {
    return <>{props.children}</>;
  };

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
