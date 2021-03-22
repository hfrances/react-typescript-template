import React, { FunctionComponent } from 'react';
import CSS from 'csstype';
import { AlertSeverityTypes, ALERT_SEVERITY_ERROR, ALERT_SEVERITY_INFO, ALERT_SEVERITY_SUCCESS, ALERT_SEVERITY_WARNING } from '../../constants';

type AlertProps = {
  severity: AlertSeverityTypes | undefined,
  message: string | undefined,
  onClose?: React.MouseEventHandler | undefined
}

interface AlertStyles {
  layerStyle: CSS.Properties,
  iconStyle: CSS.Properties,
  iconPath: any
}

const floatingStyle: CSS.Properties = {
  zIndex: 1,
  position: "absolute",
  padding: 0,
  left: 0,
  right: 0
};

const alertStyle: CSS.Properties = {
  ...floatingStyle,
  display: 'flex',
  padding: '6px 16px',
  borderRadius: '4px',
  margin: '5px',
  height: '30px',
}

const alertIconStyle: CSS.Properties = {
  padding: '3px',
  marginRight: '12px',
  fontSize: '1.5rem',
  fill: 'currentcolor',
  opacity: '0.9'
}

const alertMessageStyle: CSS.Properties = {
  padding: '3px'
}

const standardError: AlertStyles = {
  layerStyle: {
    backgroundColor: '#fdecea',
    color: '#611a15'
  },
  iconStyle: {
    color: '#f44336'
  },
  iconPath: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}

const standardWarning: AlertStyles = {
  layerStyle: {
    backgroundColor: '#fff4e5',
    color: '#663c00'
  },
  iconStyle: {
    color: '#ff9800'
  },
  iconPath: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}

const standardInfo: AlertStyles = {
  layerStyle: {
    backgroundColor: '#e8f4fd',
    color: '#0d3c61'
  },
  iconStyle: {
    color: "#2196f3"
  },
  iconPath: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}

const standardSuccess: AlertStyles = {
  layerStyle: {
    backgroundColor: '#edf7ed',
    color: '#1e4620'
  },
  iconStyle: {
    color: "#4caf50"
  },
  iconPath: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}

const AlertRectangle: FunctionComponent<AlertProps> = ({ severity, message, onClose }) => {

  const getStyle = (severity: AlertSeverityTypes | undefined): AlertStyles | undefined => {
    let style: AlertStyles | undefined;

    switch (severity) {
      case ALERT_SEVERITY_ERROR:
        style = standardError;
        break;
      case ALERT_SEVERITY_WARNING:
        style = standardWarning;
        break;
      case ALERT_SEVERITY_INFO:
        style = standardInfo;
        break;
      case ALERT_SEVERITY_SUCCESS:
        style = standardSuccess;
        break;
      default:
        style = undefined;
    }
    return style;
  }

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ ...alertStyle, ...getStyle(severity)?.layerStyle }}>
        <svg style={{ ...alertIconStyle, ...getStyle(severity)?.iconStyle }} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d={getStyle(severity)?.iconPath} />
        </svg>
        <div style={{ ...alertMessageStyle }}>
          {message}
        </div>
        {onClose ?
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '-8px', paddingLeft: '16px' }}>
            <div style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle' }} onClick={onClose}>
              <span style={{ width: '100%', display: 'flex', alignItems: 'inherit', justifyContent: 'inherit' }}>
                <svg style={{ width: '1em' }} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </span>
            </div>
          </div>
          : null
        }
      </div>
    </div>
  );
}

export { AlertRectangle };
export default AlertRectangle;