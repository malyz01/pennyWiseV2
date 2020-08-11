import React from 'react';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const {
    in: open = true,
    config = {},
    children,
    onEnter,
    onExited,
    ...other
  } = props;

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    config,
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

interface IConfig {
  mass?: number;
  tension?: number;
  friction?: number;
  clamp?: boolean;
  precision?: number;
  velocity?: number;
  duration?: number;
  easing?: () => any;
}

interface FadeProps {
  children?: React.ReactElement;
  in?: boolean;
  config?: IConfig;
  onEnter?: () => {};
  onExited?: () => {};
}

export default Fade;
