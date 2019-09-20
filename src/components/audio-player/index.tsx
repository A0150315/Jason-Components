import React, { memo, useCallback } from "react";
import ReactDOM from "react-dom";
import Modal from "../audio-modal";

const Audio = memo<{
  src?: string;
  children?: React.ReactNode;
  className?: string;
}>(function Audio(props) {
  const { children, className, ...restProps } = props;

  const handler = useCallback(async () => {
    // await audioEl.current.play()
    let maskEl: Element | any;
    if (document.querySelector("#audioModal")) {
      maskEl = document.querySelector("#audioModal");
    } else {
      maskEl = document.createElement("div");
      maskEl.id = "audioModal";
      document.documentElement.appendChild(maskEl);
    }
    const test = (
      <Modal
        onClose={() => {
          ReactDOM.unmountComponentAtNode(maskEl);
        }}
        {...restProps}
      />
    );
    ReactDOM.render(test, maskEl);
  }, [restProps]);

  return (
    <button type="button" className={className} onClick={handler}>
      {children}
    </button>
  );
});

export default Audio;
