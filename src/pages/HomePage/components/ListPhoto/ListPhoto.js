import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from "react-redux";

import CardPhoto from '../CardPhoto/CardPhoto';
import ModalPhoto from '../ModalPhoto/ModalPhoto';
import styles from './ListPhoto.module.css';

const ListPhoto = () => {
  const { photos, loadingPhotos } = useSelector((state) => state.PhotoReducer);
  const [isModalOpen, setModal] = useState(false);
  const [selectedPhoto, setPhotoModal] = useState(false);

  const handleClickCardPhoto = (photo) => {
    setPhotoModal(photo);
    showModal();
  }

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  if (loadingPhotos) {
    return <p className={styles.empty}>Loading List...</p>;
  }
  
  if (photos && photos.length == 0) {
    return <p className={styles.empty}>List photo empty</p>;
  }

  return (
    <div className={styles.list_container}>
      {photos?.map((photo, idx) => {
        return (
          <CardPhoto key={idx} data={photo} onClick={handleClickCardPhoto} />
        )
      })}
      <ModalPhoto data={selectedPhoto} show={isModalOpen} handleClose={hideModal} />
    </div>
  )
}

ListPhoto.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ListPhoto;
