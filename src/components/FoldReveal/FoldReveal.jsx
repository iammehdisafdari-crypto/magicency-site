import React from 'react';
import FoldRevealText from './FoldRevealText';

export default function FoldReveal({
  as = 'div',
  text,
  children,
  trigger = 'enter',
  replay = true,
  ...props
}) {
  return (
    <FoldRevealText
      as={as}
      text={text}
      trigger={trigger}
      replay={replay}
      {...props}
    >
      {children}
    </FoldRevealText>
  );
}
