import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import EditorPage from './pages/EditorPage.jsx'
import { EditorProvider } from './context/EditorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </EditorProvider>
  </StrictMode>,
)
