import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStore, setAlertHidden } from '../../store'
import { AlertRectangle } from '../';

type AlterRectangleStoredProps = {
  style?: React.CSSProperties;
}

const AlertRectangleStored: FunctionComponent<AlterRectangleStoredProps> = ({ style }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { alert } = getStore(useSelector);

  const hideAlert = () => {
    dispatch(setAlertHidden());
  }

  useEffect(() => {
    hideAlert();
  }, [history]);

  return (
    <Fragment>
      {alert.visible ?
        <AlertRectangle severity={alert.severity} message={alert.message} style={style} onClose={() => hideAlert()} />
        : null
      }
    </Fragment>
  );
}

export default AlertRectangleStored;
export { AlertRectangleStored };