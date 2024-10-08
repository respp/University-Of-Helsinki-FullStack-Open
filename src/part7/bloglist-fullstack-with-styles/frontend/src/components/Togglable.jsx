import { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";

const Togglable = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(refs, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div className="separation-new-blog">
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility} className="btn-create">{props.firstButtonLabel}</button>
      </div>
      <div style={showWhenVisible} className="togglableContent">
        <button onClick={toggleVisibility}  className="btn-create">{props.secondButtonLabel}</button>
        {props.children}
      </div>
    </div>
  );
});

Togglable.displayName = "Togglable";

Togglable.propTypes = {
  firstButtonLabel: PropTypes.string.isRequired,
  secondButtonLabel: PropTypes.string.isRequired,
};

export default Togglable;
