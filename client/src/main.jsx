import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'regenerator-runtime/runtime'
import '@radix-ui/themes/styles.css';
import {NextUIProvider} from '@nextui-org/react'
import { Theme } from '@radix-ui/themes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Theme>
    <App />
    </Theme>
    </NextUIProvider>
  </React.StrictMode>,
)
