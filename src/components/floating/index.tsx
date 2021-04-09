import React, { FunctionComponent } from 'react';
import CSS from 'csstype';

type FloatingProps = {
  style?: React.CSSProperties;
}

const Floating: FunctionComponent<FloatingProps> = ({ style, children }) => {
  
  return (
    <div className='floating-container' style={floatingParent}>
      <div className='floating-content' style={{ ...floating, ...style }}>
        {children}
      </div>
    </div>
  );
}

export { Floating };
export default Floating;


/* Styles */

const floatingParent: CSS.Properties = {
  position: 'relative'
}

const floating: CSS.Properties = {
  zIndex: 1,
  position: 'absolute',
  padding: 0,
  left: 0,
  right: 0
}
