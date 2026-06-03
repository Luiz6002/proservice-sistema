import { Link, useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell';

export default function LoginPage() {
  const navigate = useNavigate();
  function handleSubmit(event) { event.preventDefault(); navigate('/home'); }
  return (
    <MobileShell>
      <header className="top-header"><Link to="/" className="back-link">←</Link><h2>Entrar</h2></header>
      <form className="form-area login-card" onSubmit={handleSubmit}>
        <div><h3>Acesse sua conta</h3><p>Entre para solicitar serviços, acompanhar orçamentos e conversar com prestadores.</p></div>
        <label>E-mail<input type="email" placeholder="seuemail@exemplo.com" required /></label>
        <label>Senha<input type="password" placeholder="Digite sua senha" required /></label>
        <button className="primary-button" type="submit">Entrar</button>
        <p className="helper-text">Não tem uma conta? <Link to="/cadastro">Crie agora</Link></p>
      </form>
    </MobileShell>
  );
}
