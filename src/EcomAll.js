import { useState } from "react";
import ReactPaginate from 'react-paginate';
import './App.css'

function EcomAll({ allblog }) {

  let dollarUSLocale = Intl.NumberFormat('en-US');

  const getLink = (amount) => {
    return (  
      something
    );
  }
  const getPrice = (amount) => {
    return (  
      something
    );
  }

  
  const [users, setUsers] = useState(allblog)
  const [pageNumber, setPageNumber] = useState(0)

  const userPerPage = 10
  const pageVisited = pageNumber * userPerPage

  const displayUsers = users.slice(pageVisited, pageVisited + userPerPage).map((blog) => (
           
    <div className="product-display" key={blog.id}>
        <div className="displayImage">
          <img src={blog["images"][0]} alt="" />
        </div>
        <h4>{blog.title}</h4>
    <p className="product-description">{`${blog.description.substring(0, 88)}...`}</p>
    <p className="product-price" onClick={getPrice}>{`Price : N ${dollarUSLocale.format(blog.price * 500)}`}</p>
    <p className="product-price" onClick={getLink}>Discounted price @ 70% off <span className="product-price discount"> {`N${dollarUSLocale.format(Math.floor((blog.price * 500) / 7))}`}</span></p>
    </div>


))

  const pageCount = Math.ceil(users.length / userPerPage)

  const changePage = ({selected}) => {
      setPageNumber(selected)
  }

 
  // console.log(allblog.length)
  return (
    <div className="product-preview">
      
      <section className="products-container" >
      {displayUsers}

        </section>
      <div className="pagebreak">

      <section className="pagebreak-description">Page <span>{ `${pageNumber + 1}` }</span></section>
    <ReactPaginate 
      breakLabel="..."
      nextLabel="next >"
      previousLabel="< prev"
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={'paginateButtons'}
      previousLinkClassName={'prevButton'}
      nextLinkClassName={'nextButton'}
      disabledClassName={'disabledButton'}
      activeClassName={'activeButton'}
      renderOnZeroPageCount={null}
      />

      </div>
      
    </div>
  );
}

export default EcomAll;


