import { Link, useLocation } from 'react-router-dom';

const items = [
  { to: '/home', label: 'Início', icon: '⌂' },
  { to: '/oportunidades', label: 'Oportunidades', icon: '⌕' },
  { to: '/servicos', label: 'Serviços', icon: '▣' },
  { to: '/login', label: 'Perfil', icon: '◌' }
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      {items.map((item) => {
        const active = location.pathname === item.to;
        return (
          <Link key={item.to} to={item.to} className={`bottom-nav-item ${active ? 'active' : ''}`}>
            <span>{item.icon}</span>
            <small>{item.label}</small>
          </Link>
        );
      })}
    </nav>
  );
}
