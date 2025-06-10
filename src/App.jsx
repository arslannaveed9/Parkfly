import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import ParkingLots from './pages/admin/ParkingLots';
import Bookings from './pages/admin/Bookings';
import RevenueManagement from './pages/admin/RevenueManagement';
import Settings from './pages/admin/Settings';
import UserDetail from './pages/admin/UserDetail';
import LotDetail from './pages/admin/LotDetail';
import BookingDetail from './pages/admin/BookingDetail';
import PayoutReceipt from './pages/admin/PayoutReceipt';
import VendorDetail from './pages/admin/VendorDetail';
import VendorRequests from './pages/admin/VendorRequests';
import VendorDashboard from './pages/vendor/VendorDashboard';
import VendorBookings from './pages/vendor/VendorBookings';
import VendorBookingDetail from './pages/vendor/VendorBookingDetail';
import VendorParkingLots from './pages/vendor/VendorParkingLots';
import VendorLotDetail from './pages/vendor/VendorLotDetail';
import VendorRevenueManagement from './pages/vendor/VendorRevenueManagement';
import VendorStaff from './pages/vendor/VendorStaff';
import VendorSettings from './pages/vendor/VendorSettings';

const App = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/users" element={<UserManagement />} />
      <Route path="/admin/users/:id" element={<UserDetail />} />
      <Route path="/admin/lots" element={<ParkingLots />} />
      <Route path="/admin/lots/:id" element={<LotDetail />} />
      <Route path="/admin/bookings" element={<Bookings />} />
      <Route path="/admin/bookings/:id" element={<BookingDetail />} />
      <Route path="/admin/revenue" element={<RevenueManagement />} />
      <Route path="/admin/payouts/:id" element={<PayoutReceipt />} />
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/vendors/:id" element={<VendorDetail />} />
      <Route path="*" element={<div>404 - Not Found</div>} />
      <Route path="/admin/vendor-requests" element={<VendorRequests />} />
      <Route path="/vendor/dashboard" element={<VendorDashboard />} />
      <Route path="/vendor/bookings" element={<VendorBookings />} />
      <Route path="/vendor/booking-detail" element={<VendorBookingDetail />} />
      <Route path="/vendor/lots" element={<VendorParkingLots />} />
      <Route path="/vendor/lot-detail" element={<VendorLotDetail />} />
      <Route path="/vendor/revenue" element={<VendorRevenueManagement />} />
      <Route path="/vendor/staff" element={<VendorStaff />} />
      <Route path="/vendor/settings" element={<VendorSettings />} />
    </Routes>
  );
};

export default App;
