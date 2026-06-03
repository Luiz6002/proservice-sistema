export default function OpportunityCard({ opportunity }) {
  return (
    <article className="opportunity-card">
      <div className="opportunity-header">
        <div>
          <h3>{opportunity.title}</h3>
          <p>{opportunity.customer} · {opportunity.location}</p>
        </div>
        <span className="status-badge">{opportunity.status}</span>
      </div>
      <div className="tag-row">
        {opportunity.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <div className="opportunity-footer">
        <span>Orçamento disponível</span>
        <strong>R$ {opportunity.budget.toFixed(2)}</strong>
      </div>
    </article>
  );
}
