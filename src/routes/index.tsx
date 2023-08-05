import { Route, Routes } from 'react-router-dom';
import { Checkout } from '@app/pages/Checkout';
import { Components } from '@app/pages/Components';
import { Home } from '@app/pages/Home';
import { Success } from '@app/pages/Success';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
      <Route path="/components" element={<Components />} />
    </Routes>
  );
}
