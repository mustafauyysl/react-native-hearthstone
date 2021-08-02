import * as React from 'react';
import { CommonActions, StackActions } from '@react-navigation/native';

const routeNameRef = React.createRef();
const navigationRef = React.createRef();

const navigate = (name, params = {}) => {
  navigationRef.current?.navigate(name, params);
};

const replace = (name, params = {}) => {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
};

const reset = (name) => {
  navigationRef.current?.dispatch(CommonActions.reset(name));
};

export { replace, reset, navigate, navigationRef, routeNameRef };
