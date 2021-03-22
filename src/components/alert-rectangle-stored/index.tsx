import { FunctionComponent, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStore, setAlertHidden } from '../../store'
import { AlertRectangle } from '../';

const AlertRectangleStored: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { alert } = getStore(useSelector);
  
    const hideAlert = () => {
      dispatch(setAlertHidden());
    }

    return (
      <Fragment>
        {alert.visible ?
          <AlertRectangle severity={alert.severity} message={alert.message} onClose={() => hideAlert()} />
          : null
        }
      </Fragment>
    );
  }
  
  export default AlertRectangleStored;
  export { AlertRectangleStored };