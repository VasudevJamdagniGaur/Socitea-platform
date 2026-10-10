import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { FeaturesPage } from './pages/FeaturesPage'
import { DiscoverPage } from './pages/DiscoverPage'
import { CreatePage } from './pages/CreatePage'
import { ExtensionPage } from './pages/ExtensionPage'
import { DownloadPage } from './pages/DownloadPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ScrollToTop } from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/extension" element={<ExtensionPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
