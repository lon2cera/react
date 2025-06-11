import React, { useState } from 'react';

function ProductList({ index, name, ea, onRemove, onChangeEa }) {
  return (
    <li>
      <span>{name} - </span>
      <input
        type="number"
        value={ea}
        min="1"
        onChange={e => onChangeEa(index, e.target.value)}
      />
      <button onClick={() => onRemove(index)}>삭제</button>
    </li>
  );
}

const ShoppingList = () => {
  const [product, setProduct] = useState({ name: '', ea: 1 });
  const [products, setProducts] = useState([]);

  const handleProductChange = e => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProductList = () => {
    // const dupleCheck=products.some(product=>{
    //   const replaceProductName1=product.name.replace(/(\s*)/g,'').toLowerCase();
    //   const replaceProductName2=product.name.replace(/(\s*)/g,'').toLowerCase();
    //   return replaceProductName1===replaceProductName2
    // })
    if (!product.name.trim()) return;
    setProducts(prev => [...prev, { ...product }]);
    setProduct({ name: '', ea: 1 });
  };

  const handleProductRemove = index => {
    setProducts(prev => prev.filter((_, i) => i !== index));
  };

  const handleEaChange = (index, value) => {
    setProducts(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, ea: value } : item
      )
    );
  };

  return (
    <div>
      <h1>간단한 쇼핑 목록</h1>
      <input
        type="text"
        onChange={handleProductChange}
        name="name"
        value={product.name}
        placeholder="상품 이름"
      />
      <input
        type="number"
        onChange={handleProductChange}
        name="ea"
        value={product.ea}
        min="1"
        placeholder="수량"
      />
      <button onClick={handleProductList}>추가</button>
      <ul>
        {products.map((item, idx) => (
          <ProductList
            key={idx}
            index={idx}
            name={item.name}
            ea={item.ea}
            onRemove={handleProductRemove}
            onChangeEa={handleEaChange}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
