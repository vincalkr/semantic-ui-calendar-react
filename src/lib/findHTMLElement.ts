import { ReactInstance } from 'react';
import * as ReactDOM from 'react-dom';

export default function findHTMLElement(e: ReactInstance): HTMLElement | undefined {
  try {
    const el = ReactDOM.findDOMNode(e);
    if (el && (el as HTMLElement).focus) {
      return el as HTMLElement;
    }
  } catch (error) {
      return undefined;
  }


  return undefined;
}
