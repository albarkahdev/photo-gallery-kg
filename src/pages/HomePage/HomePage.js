import { useEffect, useContext, Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import SearchPhotos from "./components/SearchPhotos/SearchPhotos";
import ListPhoto from "./components/ListPhoto/ListPhoto";
import styles from './HomePage.module.css';
import { getPhotos, getMorePhotos } from "../../store/photos/actions";
import useIsScrollToBottomDiv from "../../hooks/useIsScrollToBottomDiv";

function HomePage() {
  const { currentPage, currentSearchKeyword, loadingMorePhotos } = useSelector((state) => state.PhotoReducer);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos(1));
  }, []);
  
  const { isBottom } = useIsScrollToBottomDiv();

  useEffect(() => {
    if (isBottom && !loadingMorePhotos) {
      dispatch(getMorePhotos(currentPage + 1, currentSearchKeyword));
    }
  }, [isBottom, loadingMorePhotos, currentPage, currentSearchKeyword]);

  return (
    <>
      <Suspense fallback={<p>Loading HomePage...</p>}>
        <div className={styles.container}>
          <h1>Photo Gallery</h1>
          <SearchPhotos />
          <Suspense fallback={<p>Loading List Image...</p>}>
            <ListPhoto />
          </Suspense>
        </div>
      </Suspense>
      <div className={styles.footer}>
        {
          loadingMorePhotos
          && (<div className={styles.button_load_more_loading}>
            <p>Loading...</p>
          </div>)
        }
      </div>
    </>
  )
}

export default HomePage;
