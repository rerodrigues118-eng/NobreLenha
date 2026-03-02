import { useState } from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProductDetail from './components/ProductDetail';

function App() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedProductId(null);
  };

  if (selectedProductId !== null) {
    return (
      <div>
        <ProductDetail productId={selectedProductId} onBack={handleBack} />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Products onProductClick={handleProductClick} />
      <Differentials />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
