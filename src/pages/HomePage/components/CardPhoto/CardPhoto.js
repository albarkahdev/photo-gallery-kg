import PropTypes from 'prop-types';

import styles from './CardPhoto.module.css';

const CardPhoto = ({ data: photo, onClick }) => {
  return (
    <div className={styles.card_photo} onClick={() => onClick(photo)}>
      <div className={styles.image_container}>
        <img className={styles.image} src={photo?.urls?.small} alt={photo?.alt_description} />
      </div>
      <div className={styles.description}>
        <div className={styles.name}>
          <p>{photo?.alt_description}</p>
        </div>
      </div>
    </div>
  );
};

CardPhoto.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardPhoto;
