import {
    GET_DATA_BOOKS,
    GET_DATA_BOOKS_BY_PAGE,
    GET_DATA_BOOKS_FAVORITES,
    GET_DATA_BOOKS_LOADING,
    GET_DATA_BOOKS_ERRORMESSAGE
  } from "./types";
  
  export const setLoadingBooks = () => (dispatch) => {
    let data = true;
    dispatch({ type: GET_DATA_BOOKS_LOADING, payload: data });
  };
  
  export const setErrorBooks = () => (dispatch) => {
    let data = "Salah";
    dispatch({ type: GET_DATA_BOOKS_ERRORMESSAGE, payload: data });
  };
  
  export const getDataBooks = (e) => (dispatch) => {
    const id = e;
    fetch(
      `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        let result = json.map((el) => {
          return el;
        });
        dispatch({ type: GET_DATA_BOOKS, payload: result });
      });
  };

  export const getDataBooksByPage = (idCategories, currentPageValue, sizePage) => (dispatch) => {
    fetch(
      `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${idCategories}&page=${currentPageValue}&size=${sizePage}`
    )
      .then((response) => response.json())
      .then((json) => {
        let result = json.map((el) => {
          return el;
        });
        dispatch({ type: GET_DATA_BOOKS_BY_PAGE, payload: result });
      });
  };

  export const setDataBooksFavorites = (value) => (dispatch) => {
        dispatch({ type: GET_DATA_BOOKS_FAVORITES, payload: value });
  };

  