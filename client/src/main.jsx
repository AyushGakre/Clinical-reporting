import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'regenerator-runtime/runtime'
import '@radix-ui/themes/styles.css';
import {NextUIProvider} from '@nextui-org/react'
import { Theme } from '@radix-ui/themes'
import {ClerkProvider} from '@clerk/clerk-react'
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <NextUIProvider >
      <Theme>
        <App />
    </Theme>
    </NextUIProvider>
    </ClerkProvider>
  </React.StrictMode>,
)
