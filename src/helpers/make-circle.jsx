import React from 'react'

const makeCircle = ({ color, size }) => (
  <svg height={size} width={size}>
    <circle cx={size / 2} cy={size / 2} fill={color} r={size / 2} />
  </svg>
)

export default makeCircle
