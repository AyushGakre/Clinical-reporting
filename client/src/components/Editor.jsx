import React, { useState, useRef, useMemo } from 'react';
import {JoditEditor} from 'jodit-react'
const Editor = () => {
  const editor = useRef(null);
	const [content, setContent] = useState('');
  return (
    <div>Editor</div>
  )
}

export default Editor