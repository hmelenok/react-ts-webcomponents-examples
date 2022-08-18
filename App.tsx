import { useState, useRef, useEffect } from 'react';
import * as React from 'react';
import './style.css';
//Import WC
import './web-components/hello-world';
import './web-components/counter-wc';
import './web-components/expand-wc';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hello-world': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'expand-wc': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'counter-wc': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { increment: number },
        HTMLElement
      >;
    }
  }
}

export default function App() {
  const [increment, setIncrement] = useState<number>(1);
  const [color, setColor] = useState('red');
  const wcRef = useRef(null);

  useEffect(() => {
    wcRef.current.increment = increment;
  }, [increment]);

  return (
    <div>
      <h2>Basic:</h2>
      <expand-wc>
        <hello-world></hello-world>
      </expand-wc>
      <hr />
      <h2>Counter + React integration</h2>
      Increment - {increment}
      <span>
        <button onClick={() => setIncrement(increment + 1)}>+</button>
        <button onClick={() => setIncrement(increment - 1)}>-</button>
      </span>
      <expand-wc>
        <counter-wc
          ref={wcRef}
          increment={increment}
          color={color}
        ></counter-wc>
      </expand-wc>
      <hr />
      <h2>Fast + React</h2>
      <expand-wc>
      <FastCard>
          <h2>FAST React</h2>
          <FastButton appearance="accent" onClick={() => console.log("clicked")}>Click Me</FastButton>
      </FastCard>

      </expand-wc>
    </div>
  );
}
