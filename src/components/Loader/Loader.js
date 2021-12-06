import styles from 'components/Loader/Loader.module.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function LoaderSpin() {
  return (
    <div className={styles.loader}>
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={80}
        width={80}
        timeout={3000}
      />
    </div>
  );
}
