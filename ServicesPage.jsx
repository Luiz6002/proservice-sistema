import { Link, useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell';

export default function RegisterPage() {
  const navigate = useNavigate();
  function handleSubmit(event) { event.preventDefault(); navigate('/login'); }
  return (
    <MobileShell>
      <header className="top-header"><Link to="/" className="back-link">←</Link><h2>Criar conta</h2></header>
      <form className="form-area" onSubmit={handleSubmit}>
        <label>Nome completo<input type="text" placeholder="Seu nome" required /></label>
        <label>E-mail<input type="email" placeholder="seuemail@exemplo.com" required /></label>
        <label>Telefone<input type="tel" placeholder="(62) 99999-9999" required /></label>
        <label>Senha<input type="password" placeholder="Crie uma senha" required /></label>
        <div className="role-switch"><button type="button" className="role-button active">Cliente</button><button type="button" className="role-button">Prestador</button></div>
        <button className="primary-button" type="submit">Cadastrar</button>
        <p className="helper-text">Já tem conta? <Link to="/login">Entrar</Link></p>
      </form>
    </MobileShell>
  );
}
