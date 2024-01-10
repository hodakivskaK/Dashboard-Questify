import { ToastContainer,  Zoom } from 'react-toastify';

export const ToasterStyle = () => {
  return (
    <ToastContainer
    icon={true}
    theme={'dark'}
    autoClose={3000}
    closeButton={false}
    toastClassName={'toast'}
    position={'top-left'}
    hideProgressBar={true}
    transition={Zoom}
    closeOnClick
    draggable={false}
    
  />
  )
};
