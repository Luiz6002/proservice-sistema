import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import MobileShell from '../components/MobileShell';

export default function SplashPage() {
  return (
    <MobileShell className="splash-page">
      <div className="splash-glow" />
      <div className="logo-block">
        <div className="logo-circle"><img src={logo} alt="Logo Pro Service" className="logo-image" /></div>
        <h1>Pro Service</h1>
        <p>Conectando clientes a prestadores confiáveis para serviços do dia a dia.</p>
      </div>
      <div className="splash-preview">
        <div><strong>Eletricista</strong><span>4.9 ★</span></div>
        <div><strong>Encanador</strong><span>2,4 km</span></div>
        <div><strong>Pintor</strong><span>R$ 180</span></div>
      </div>
      <div className="auth-actions">
        <Link to="/login" className="white-button">Entrar</Link>
        <Link to="/cadastro" className="outline-button">Criar conta</Link>
      </div>
    </MobileShell>
  );
}
