import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStore, setAlertHidden } from '../../store'
import Alert from './alert';
import { Floating } from '../';
import { CommonHelper } from '../../helpers';

type AlterRectangleProps = {
  style?: React.CSSProperties;
}

const AlertRectangle: FunctionComponent<AlterRectangleProps> = ({ style }) => {
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
    <Floating style={{ marginTop: style?.marginTop }}>
        {alert.visible ?
          <Alert severity={alert.severity} message={alert.message} style={{ ...CommonHelper.omit(style, 'marginTop') }} onClose={() => hideAlert()} />
          : null
        }
    </Floating>
  );
}

export { AlertRectangle };
export default AlertRectangle;