import * as React from 'react';

import { Text, TextProps } from './Themed';

// eslint-disable-next-line import/prefer-default-export
export function MonoText({ style, ...props }: TextProps) {
  return <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />;
}
