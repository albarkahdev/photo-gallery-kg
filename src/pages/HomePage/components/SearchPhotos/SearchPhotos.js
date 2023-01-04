import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from "react-redux";

import { getPhotos } from '../../../../store/photos/actions';

import styles from "./SearchPhotos.module.css";

const SearchPhotos = () => {
  const [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getPhotos(1, keyword));
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.select_typea}
        placeholder="Search photo"
        onChange={e => setKeyword(e.target.value)}
        value={keyword}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

SearchPhotos.propTypes = {
};

export default SearchPhotos;
