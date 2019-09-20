import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect
} from "react";
import { c as classNames, s as styles } from "../../index.module-18a0a0b2.js";

var Modal = function(props) {
  var onClose = props.onClose,
    src = props.src;
  var _a = useState(0),
    opacity = _a[0],
    setOpacity = _a[1];
  var audioEl = useRef(null);
  var maskHandler = useCallback(
    function() {
      setOpacity(0);
      setTimeout(onClose, 200);
    },
    [onClose]
  );
  var audioHandler = useCallback(function() {
    if (audioEl.current) audioEl.current.play();
  }, []);
  var audioStyles = useMemo(
    function() {
      var _a;
      return classNames(
        styles.audio,
        ((_a = {}), (_a[styles.audio_show] = opacity), _a)
      );
    },
    [opacity]
  );
  useEffect(function() {
    setOpacity(1);
  }, []);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("div", {
      className: styles.mask,
      style: { opacity: opacity },
      onClick: maskHandler
    }),
    React.createElement(
      "audio",
      {
        ref: audioEl,
        style: { display: "block" },
        controls: true,
        className: audioStyles,
        onCanPlay: audioHandler
      },
      React.createElement("source", { src: src }),
      React.createElement("track", { kind: "captions" })
    )
  );
};

export default Modal;
