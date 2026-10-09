import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PageLayout } from '@/components/layout/PageLayout'
import { Home } from '@/pages/Home'
import { FeaturesPage } from '@/pages/Features'
import { Download } from '@/pages/Download'
import { Extension } from '@/pages/Extension'
import { About } from '@/pages/About'
import { FAQ } from '@/pages/FAQ'
import { Contact } from '@/pages/Contact'
import { Privacy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'
import { WebApp } from '@/pages/WebApp'
import { NotFound } from '@/pages/NotFound'
import { ScrollToTop } from '@/components/layout/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="download" element={<Download />} />
          <Route path="extension" element={<Extension />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="web-app" element={<WebApp />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
