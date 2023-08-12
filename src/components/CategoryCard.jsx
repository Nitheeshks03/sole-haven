import "./CategoryCard.css";

function CategoryCard({ title, image }) {
  return (
    <div className="card">
      <img src={image} />
      <h2>{title}</h2>
    </div>
  );
}

export default CategoryCard;
