import React from 'react';

const ProductListing = (props: any) => {
  const handleBtnClick = () => {
    window.dataLayer.push({'event': 'productListingCTA'});
    props.openInquiry();
  }
  return (
    <div className="productListing">
      <div className="contentWrap">
        {props.products.map((item: any, index: number) => {
          return (
            <a href={`/products/deer-feeders/${item.slug}`} key={index}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <h5 className="details">View Details</h5>
            </a>
          );
        })}
      </div>
      <button className="btn" onClick={handleBtnClick}>
        Inquire For Purchase
      </button>
    </div>
  )
}

export default ProductListing;
