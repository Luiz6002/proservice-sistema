import { useState } from 'react';
import MobileShell from '../components/MobileShell';
import BottomNav from '../components/BottomNav';
import OpportunityCard from '../components/OpportunityCard';
import FilterModal from '../components/FilterModal';
import { opportunities } from '../data/mockData';

export default function OpportunitiesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <MobileShell>
      <section className="content-scroll with-bottom-nav">
        <header className="simple-header">
          <div>
            <small>Serviços abertos</small>
            <h2>Oportunidades</h2>
          </div>
          <button className="icon-button" onClick={() => setModalOpen(true)} aria-label="Abrir filtros">⚲</button>
        </header>

        <div className="tag-row top-spacing">
          <span className="tag active-tag">Todos</span>
          <span className="tag">Elétrica</span>
          <span className="tag">Hidráulica</span>
          <span className="tag">Reformas</span>
          <span className="tag">Urgente</span>
        </div>

        <div className="list-stack top-spacing">
          {opportunities.map((item) => <OpportunityCard key={item.id} opportunity={item} />)}
        </div>
      </section>
      <FilterModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <BottomNav />
    </MobileShell>
  );
}
