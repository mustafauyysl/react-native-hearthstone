import React from 'react';
// Modules
import { useTranslation } from 'react-i18next';
import { useNetInfo } from '@react-native-community/netinfo';
// Components
import { Modal, RequestComponent } from '@components';

// Network

const withNetwork = (WrappedComponent) => (props) => {
  // Translation
  const { t } = useTranslation();
  // Network
  const netInfo = useNetInfo();
  return (
    <>
      <RequestComponent />
      <Modal />
      <WrappedComponent {...props} />
    </>
  );
};
export default withNetwork;
