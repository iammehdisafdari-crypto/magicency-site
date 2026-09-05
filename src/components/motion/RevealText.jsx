import React from 'react';
import RevealHeading from './RevealHeading';

/**
 * RevealText is an alias for RevealHeading to support both naming conventions.
 */
export default function RevealText(props) {
  return <RevealHeading {...props} />;
}
