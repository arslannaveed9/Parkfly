import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import ParkingLots from './pages/admin/ParkingLots';
import Bookings from './pages/admin/Bookings';
import Payouts from './pages/admin/Payouts';
import Settings from './pages/admin/Settings';
import TaxesCharges from './pages/admin/TaxesCharges';

import UserDetail from './pages/admin/UserDetail';
import LotDetail from './pages/admin/LotDetail';
import BookingDetail from './pages/admin/BookingDetail';
import PayoutReceipt from './pages/admin/PayoutReceipt';

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
      <Route path="/admin/payouts" element={<Payouts />} />
      <Route path="/admin/payouts/:id" element={<PayoutReceipt />} />
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/settings/taxes" element={<TaxesCharges />} />
      <Route path="*" element={<div>404 - Not Found</div>} />
    </Routes>
  );
};

export default App;
