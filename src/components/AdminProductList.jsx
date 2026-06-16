export default function AdminProductList({
  products,
  handleEdit,
  handleDelete
}) {
  return (
    <>
      {products.map((product) => (

        <div
          key={product.id}
          className="admin-product"
        >

          <span>
            {product.name} - {product.price} kr
          </span>

          <button
            onClick={() =>
              handleEdit(product)
            }
          >
            Edit
          </button>

          <button
            onClick={() =>
              handleDelete(product.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}