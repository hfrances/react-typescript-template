import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStore, setAlertHidden } from '../../store'
import Alert, { Color } from '@material-ui/lab/Alert';
import { Floating } from '../';
import { CommonHelper } from '../../helpers';
import { AlertSeverityTypes, ALERT_SEVERITY_ERROR, ALERT_SEVERITY_INFO, ALERT_SEVERITY_WARNING } from '../../constants';

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

  const castSeverity = (severity: AlertSeverityTypes | undefined): (Color | undefined) => {
    let rdo: Color | undefined;

    switch (severity) {
      case ALERT_SEVERITY_ERROR:
        rdo = 'error';
        break;
      case ALERT_SEVERITY_WARNING:
        rdo = 'warning';
        break;
      case ALERT_SEVERITY_INFO:
        rdo = 'info';
        break;
      default:
        rdo = undefined;
    }
    return rdo;
  }

  useEffect(() => {
    hideAlert();
  }, [history]);

  return (
    <Floating style={{ marginTop: style?.marginTop }}>
      {alert.visible ?
        <Alert severity={castSeverity(alert.severity)} style={{ ...CommonHelper.omit(style, 'marginTop') }} onClose={() => hideAlert()}>
          {alert.message}
        </Alert>
        : null
      }
    </Floating>
  );
}

export { AlertRectangle };
export default AlertRectangle;