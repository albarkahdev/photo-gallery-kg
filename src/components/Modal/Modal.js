import styles from './Modal.module.css';

const Modal = ({show, children }) => {
  return (
    <div className={styles.modal} style={{
      display: show ? "block" : "none"
    }}>
      <section className={styles.modal_main}>
        {children}
      </section>
    </div>
  );
};

export default Modal;