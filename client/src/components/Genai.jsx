import axios from 'axios'
import React, { useState } from 'react'

const Genai = async(text) => {
    const ans = await axios.post('http://localhost:3000/generate',{text})
  return (
    <div>
        {ans.data}
    </div>
  )
}

export default Genai