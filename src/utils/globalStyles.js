import React from 'react'
import Typography from './typography'
/* Global style variables */

export const spacing = 30;

export const palette = {
  backgroundLight : '#F8F8F8',
  backgroundDark : '#F0F0F0',
  nearBlack : '#1A1A1A',
  blackTransparent : 'rgba(26,26,26,0.9)',
}

/* Additional font sizes */

export const captionSize = Typography.options.baseFontSize.substring(0,Typography.options.baseFontSize.length-2) / Typography.options.scaleRatio*2.5
