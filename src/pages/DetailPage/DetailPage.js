import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import styles from './DetailPage.module.css';
import { getPhotoDetails } from "../../store/photos/actions";
import { useEffect } from "react";

function DetailPage() {
  const { photo, loadingPhotoDetails } = useSelector((state) => state.PhotoReducer);
  let dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    const { photoId } = params;
    dispatch(getPhotoDetails(photoId));
  }, []);

  if (loadingPhotoDetails) {
    return <p className={styles.empty}>Loading photo...</p>;
  }
  
  if (photo && photo === {}) {
    return <p className={styles.empty}>Data not valid</p>;
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={photo?.urls?.regular} alt={photo?.alt_description} />
      <div className={styles.photo_description}>
        <p>{photo?.alt_description}</p>
        <p>by {photo?.user?.name}</p>
        <p></p>
      </div>
    </div>
  );
}

export default DetailPage;
