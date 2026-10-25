import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PageSkeleton from '../components/common/PageSkeleton'

/* ── Public pages ── */
const Home      = lazy(() => import('../pages/public/Home'))
const About     = lazy(() => import('../pages/public/About'))
const Solutions = lazy(() => import('../pages/public/Solutions'))
const Services     = lazy(() => import('../pages/public/Services'))
const Partnerships = lazy(() => import('../pages/public/Partnerships'))
const Contact      = lazy(() => import('../pages/public/Contact'))

/* ── App pages ── */
const Accounting     = lazy(() => import('../pages/app/Accounting'))
const Sales          = lazy(() => import('../pages/app/Sales'))
const Purchases      = lazy(() => import('../pages/app/Purchases'))
const Inventory      = lazy(() => import('../pages/app/Inventory'))
const Assets         = lazy(() => import('../pages/app/Assets'))
const HumanResources = lazy(() => import('../pages/app/HumanResources'))
const Payroll        = lazy(() => import('../pages/app/Payroll'))
const PointOfSale    = lazy(() => import('../pages/app/PointOfSale'))
const Reports        = lazy(() => import('../pages/app/Reports'))
const Settings       = lazy(() => import('../pages/app/Settings'))

function AppRoutes() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        {/* Public */}
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/solutions"    element={<Solutions />} />
        <Route path="/services"     element={<Services />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/contact"      element={<Contact />} />

        {/* App showcase */}
        <Route path="/app">
          <Route index element={<Navigate to="/app/accounting" replace />} />
          <Route path="accounting"  element={<Accounting />} />
          <Route path="sales"       element={<Sales />} />
          <Route path="purchases"   element={<Purchases />} />
          <Route path="inventory"   element={<Inventory />} />
          <Route path="assets"      element={<Assets />} />
          <Route path="hr"          element={<HumanResources />} />
          <Route path="payroll"     element={<Payroll />} />
          <Route path="pos"         element={<PointOfSale />} />
          <Route path="reports"     element={<Reports />} />
          <Route path="settings"    element={<Settings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
