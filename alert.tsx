import { Header } from './components/Header';
import { ImageCarousel } from './components/ImageCarousel';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <Header />
      <ImageCarousel />
      <Services />
      <Footer />
    </div>
  );
}
