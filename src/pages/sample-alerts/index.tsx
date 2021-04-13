import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ALERT_SEVERITY_ERROR, ALERT_SEVERITY_WARNING, ALERT_SEVERITY_INFO, ALERT_SEVERITY_SUCCESS, AlertSeverityTypes } from '../../constants';
import { getStore, setAlert, setAlertHidden } from '../../store';
import { MainFrame } from '../../components';
import debug from '../../helpers/debug';

const SampleAlertsPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { alert } = getStore(useSelector);

  const showAlert = (severity: AlertSeverityTypes, message: string) => {
    dispatch(setAlert({
      severity: severity,
      message: message,
      details: undefined,
      timeout: 5000,
      visible: true
    }));
  }

  const hideAlert = () => {
    dispatch(setAlertHidden());
  }

  useEffect(() => {
    debug.log("Creating component", "SampleAlerts");
  }, []);

  useEffect(() => {

  }, [alert]);

  return (
    <MainFrame headerTitle="Alert samples" footerVisible={true}>
      <button className="button-link App-link" onClick={() => showAlert(ALERT_SEVERITY_ERROR, "This is an error alert!")}>
        Show error alert
      </button>
      <button className="button-link App-link" onClick={() => showAlert(ALERT_SEVERITY_WARNING, "This is a warning alert!")}>
        Show warning alert
      </button>
      <button className="button-link App-link" onClick={() => showAlert(ALERT_SEVERITY_INFO, "This is an info message")}>
        Show info message
      </button>
      <button className="button-link App-link" onClick={() => showAlert(ALERT_SEVERITY_SUCCESS, "This is a success message")}>
        Show success message
      </button>
      <button className="button-link App-link" onClick={() => hideAlert()}>
        Reset
      </button>
    </MainFrame>
  );
};

export { SampleAlertsPage };
export default SampleAlertsPage;