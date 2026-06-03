export default function FilterModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <section className="filter-modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header"><h2>Filtros</h2><button className="icon-button" onClick={onClose}>×</button></header>
        <div className="filter-group"><h3>Categoria</h3><div className="tag-row"><span className="tag">Elétrica</span><span className="tag">Hidráulica</span><span className="tag">Reformas</span><span className="tag">Pintura</span><span className="tag">Climatização</span></div></div>
        <div className="filter-group"><h3>Preço máximo</h3><button className="primary-light">Até R$ 300,00</button></div>
        <div className="filter-group"><h3>Distância</h3><button className="primary-light">Até 10 km</button></div>
        <div className="modal-actions"><button className="secondary-button" onClick={onClose}>Limpar</button><button className="primary-button" onClick={onClose}>Aplicar</button></div>
      </section>
    </div>
  );
}
