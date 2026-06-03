import MobileShell from '../components/MobileShell';
import BottomNav from '../components/BottomNav';
import ProviderCard from '../components/ProviderCard';
import { categories, providers, testimonials } from '../data/mockData';

export default function HomePage() {
  return (
    <MobileShell>
      <section className="content-scroll with-bottom-nav">
        <header className="home-header">
          <div>
            <small>Olá, Natanael</small>
            <h2>Contrate serviços com segurança</h2>
          </div>
          <div className="avatar profile-avatar">N</div>
        </header>

        <div className="search-row">
          <input type="text" placeholder="Buscar: eletricista, encanador, pintura..." />
          <button className="icon-button" aria-label="Buscar">⌕</button>
        </div>

        <section className="banner-card realistic-banner">
          <div>
            <small>Pro Service</small>
            <h3>Profissionais verificados perto de você</h3>
            <p>Compare avaliações, preço médio e disponibilidade antes de solicitar um serviço.</p>
            <div className="banner-stats">
              <span><strong>4.8</strong> média</span>
              <span><strong>+180</strong> serviços</span>
              <span><strong>24h</strong> suporte</span>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="section-title-row">
            <h3>Categorias de serviços</h3>
            <small>Ver todas</small>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <article className="category-item" key={category.title}>
                <span>{category.icon}</span>
                <strong>{category.title}</strong>
                <small>{category.count}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-title-row">
            <h3>Prestadores em destaque</h3>
            <small>Mais próximos</small>
          </div>
          <div className="list-stack">
            {providers.map((provider) => <ProviderCard key={provider.id} provider={provider} />)}
          </div>
        </section>

        <section className="section-block testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <p>“{item.text}”</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </section>
      </section>
      <BottomNav />
    </MobileShell>
  );
}
