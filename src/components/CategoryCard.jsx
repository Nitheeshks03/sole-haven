import "./CategoryCard.css";

function CategoryCard({ title, image }) {
  return (
    <>
      <div className='category-card'>
        <figure>
          <img className='card-img' src="/images/category-women.png" alt="" />
        </figure>
      </div>
    </>
  );
}

export default CategoryCard;
