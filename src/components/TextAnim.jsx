import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function TextAnim({speed , repeat , style , text1 , text2}) {
  return (
    <TypeAnimation
  sequence={[
    `${text1? text1 : '\n'}`,
    500,
    `${text1? text1 : '\n'}${text2? text2 : '\n'}`, //  Continuing previous Text
    1000000,
  ]}
  speed={speed}
  style={{whiteSpace: '', display: 'block' , height : '' }}
  repeat={repeat}
  cursor = {false}
/>
  )
}

export default TextAnim
