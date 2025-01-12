import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib"
import {
  useEffect,
  useState
} from "react"

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */

const StreamlitContainerWidth = (props: ComponentProps) => {
  const [prevWidth, setprevWidth] = useState(0);

  useEffect(() => {
    // Round width to the nearest 100
    const roundedWidth = Math.round(props.width / 100) * 100;

    if (roundedWidth !== prevWidth) {
      let timeout: ReturnType<typeof setTimeout>;

      timeout = setTimeout(() => {
        Streamlit.setComponentValue({ width: roundedWidth });
        setprevWidth(roundedWidth);
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [props.width, prevWidth]);

  return null;
}

export default withStreamlitConnection(StreamlitContainerWidth);
