import Modal from '../../../../components/Modal/Modal';
import styles from './ModalPhoto.module.css';

const ModalPhoto = ({ data: photo, show, handleClose }) => {
  return (
    <Modal show={show}>
      <div className={styles.container}>
        <img className={styles.image} src={photo?.urls?.regular} alt={photo?.alt_description} />
        <div className={styles.photo_description}>
          <p>{photo?.alt_description}</p>
          <p>by {photo?.user?.name}</p>

          <button className={styles.buttonClose} type="button" onClick={handleClose}>
            Close
          </button>
          <p></p>
        </div>
      </div>
    </Modal>
  )
}

export default ModalPhoto;