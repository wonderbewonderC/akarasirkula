import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import BottomNavBar from './components/Shared/BottomNavBar';

import Splash from './pages/Auth/Splash';
import Onboarding from './pages/Auth/Onboarding';
import Login from './pages/Auth/Login';
import RegisterStep1 from './pages/Auth/RegisterStep1';
import RegisterStep2 from './pages/Auth/RegisterStep2';
import RegisterUMKM from './pages/Auth/RegisterUMKM';
import RegisterSuccess from './pages/Auth/RegisterSuccess';
import Home from './pages/Home/Home';
import Market from './pages/Home/Market';
import HubLocation from './pages/Home/HubLocation';
import ProductDetail from './pages/Market/ProductDetail';
import Checkout from './pages/Checkout/Checkout';
import SetorJenis from './pages/Setor/SetorJenis';
import SetorEstimasi from './pages/Setor/SetorEstimasi';
import SetorJadwal from './pages/Setor/SetorJadwal';
import SetorKonfirmasi from './pages/Setor/SetorKonfirmasi';
import SetorSuccess from './pages/Setor/SetorSuccess';

import History from './pages/Home/History';
import Profile from './pages/Home/Profile';
import HargaLimbah from './pages/Home/HargaLimbah';
import DampakSaya from './pages/Home/DampakSaya';

import EditProfile from './pages/Home/EditProfile';
import SavedAddresses from './pages/Home/SavedAddresses';
import AddAddress from './pages/Home/AddAddress';
import Notifications from './pages/Home/Notifications';

// UMKM Pages
import DashboardUMKM from './pages/UMKM/DashboardUMKM';
import OrdersUMKM from './pages/UMKM/OrdersUMKM';
import ProductsUMKM from './pages/UMKM/ProductsUMKM';
import AddProductUMKM from './pages/UMKM/AddProductUMKM';
import ProfileUMKM from './pages/UMKM/ProfileUMKM';
import WithdrawUMKM from './pages/UMKM/WithdrawUMKM';
import EditProfileUMKM from './pages/UMKM/EditProfileUMKM';
import StoreInfoUMKM from './pages/UMKM/StoreInfoUMKM';
import NotificationsUMKM from './pages/UMKM/NotificationsUMKM';

// Layouts
import UMKMLayout from './components/Layout/UMKMLayout';

import SetorMethodModal from './components/Shared/SetorMethodModal';

// Layout with BottomNavBar
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[430px] mx-auto bg-surface min-h-screen relative shadow-2xl flex flex-col overflow-hidden">
    {children}
    <BottomNavBar />
    <SetorMethodModal />
  </div>
);

// Layout without BottomNavBar
const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[430px] mx-auto bg-surface min-h-screen relative shadow-2xl flex flex-col overflow-hidden">
    {children}
  </div>
);

const App: React.FC = () => {
  return (
    <div className="bg-n100-surface min-h-screen flex justify-center text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Router>
        <Routes>
          <Route path="/" element={<AuthLayout><Splash /></AuthLayout>} />
          <Route path="/onboarding" element={<AuthLayout><Onboarding /></AuthLayout>} />
          <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/register-step1" element={<AuthLayout><RegisterStep1 /></AuthLayout>} />
          <Route path="/register-step2" element={<AuthLayout><RegisterStep2 /></AuthLayout>} />
          <Route path="/register-step3" element={<AuthLayout><RegisterUMKM /></AuthLayout>} />
          <Route path="/register-success" element={<AuthLayout><RegisterSuccess /></AuthLayout>} />

          <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/market" element={<MainLayout><Market /></MainLayout>} />
          <Route path="/hub-lokasi" element={<MainLayout><HubLocation /></MainLayout>} />
          <Route path="/product/:id" element={<AuthLayout><ProductDetail /></AuthLayout>} />
          <Route path="/checkout" element={<AuthLayout><Checkout /></AuthLayout>} />

          {/* Setor Limbah Flow */}
          <Route path="/setor-jenis" element={<AuthLayout><SetorJenis /></AuthLayout>} />
          <Route path="/setor-estimasi" element={<AuthLayout><SetorEstimasi /></AuthLayout>} />
          <Route path="/setor-jadwal" element={<AuthLayout><SetorJadwal /></AuthLayout>} />
          <Route path="/setor-konfirmasi" element={<AuthLayout><SetorKonfirmasi /></AuthLayout>} />
          <Route path="/setor-success" element={<AuthLayout><SetorSuccess /></AuthLayout>} />

          {/* User Portal Screens */}
          <Route path="/history" element={<MainLayout><History /></MainLayout>} />
          <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
          <Route path="/profile/edit" element={<AuthLayout><EditProfile /></AuthLayout>} />
          <Route path="/profile/address" element={<AuthLayout><SavedAddresses /></AuthLayout>} />
          <Route path="/profile/address/add" element={<AuthLayout><AddAddress /></AuthLayout>} />
          <Route path="/harga-limbah" element={<MainLayout><HargaLimbah /></MainLayout>} />
          <Route path="/dampak" element={<MainLayout><DampakSaya /></MainLayout>} />
          <Route path="/notifications" element={<AuthLayout><Notifications /></AuthLayout>} />

          {/* UMKM Portal Screens */}
          <Route path="/umkm/dashboard" element={<UMKMLayout><DashboardUMKM /></UMKMLayout>} />
          <Route path="/umkm/orders" element={<UMKMLayout><OrdersUMKM /></UMKMLayout>} />
          <Route path="/umkm/products" element={<UMKMLayout><ProductsUMKM /></UMKMLayout>} />
          <Route path="/umkm/products/add" element={<AuthLayout><AddProductUMKM /></AuthLayout>} />
          <Route path="/umkm/profile" element={<UMKMLayout><ProfileUMKM /></UMKMLayout>} />
          <Route path="/umkm/profile/edit" element={<AuthLayout><EditProfileUMKM /></AuthLayout>} />
          <Route path="/umkm/store" element={<UMKMLayout><StoreInfoUMKM /></UMKMLayout>} />
          <Route path="/umkm/notifications" element={<AuthLayout><NotificationsUMKM /></AuthLayout>} />
          <Route path="/umkm/withdraw" element={<AuthLayout><WithdrawUMKM /></AuthLayout>} />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
