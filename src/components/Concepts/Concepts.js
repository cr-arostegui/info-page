import ConceptItem from './ConceptItem';

export default function Concepts({ items }) {
  return (
    <ul id="concepts">
      <ConceptItem item={items[0]} />
      <ConceptItem item={items[1]} />
      <ConceptItem item={items[2]} />
    </ul>
  );
}
