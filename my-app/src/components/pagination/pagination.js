import React from 'react'
import { useDispatch } from "react-redux";
import { Pagination } from '@mui/material'
import { getDataBooksByPage } from "../../store/actions/books";

const Paginations = ({postPerPage, totalPost, categories}) => {
  
    const dispatch = useDispatch(postPerPage, categories);
    const countPage = Math.floor(totalPost/postPerPage)
   
    let onChange = (e) => {
        const page = e.target.textContent
        dispatch(getDataBooksByPage(categories, page, postPerPage));
        window.scroll(0,0)
      };

  return (
    <div>
        <Pagination
            count={countPage}
            color="primary"
            onChange={e => onChange(e)}
            />
    </div>
  )
}

export default Paginations