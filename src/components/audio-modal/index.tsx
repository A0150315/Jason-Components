import React, {
  FC,
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo
} from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

type ModalProps = {
  onClose: () => void;
  src?: string;
};

const Modal: FC<ModalProps> = props => {
  const { onClose, src } = props;

  const [opacity, setOpacity] = useState(0);

  const audioEl = useRef<HTMLAudioElement>(null);

  const maskHandler = useCallback(() => {
    setOpacity(0);
    setTimeout(onClose, 200);
  }, [onClose]);

  const audioHandler = useCallback(() => {
    if (audioEl.current) audioEl.current.play();
  }, []);

  const audioStyles = useMemo(
    () =>
      classNames(styles.audio, {
        [styles.audio_show]: opacity
      }),
    [opacity]
  );

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <>
      <div className={styles.mask} style={{ opacity }} onClick={maskHandler} />
      <audio
        ref={audioEl}
        style={{ display: "block" }}
        controls
        className={audioStyles}
        onCanPlay={audioHandler}
      >
        <source src={src} />
        <track kind="captions" />
      </audio>
    </>
  );
};

export default Modal;
