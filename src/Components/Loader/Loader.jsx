import { Puff } from 'react-loader-spinner'
import s from "./Loader.module.css";

const Spinner = () => {
  return (
    <div className={s.loaderWrapper}>
      <Puff
    visible={true}
    height="80"
    width="80"
    color="#00BFFF"
    ariaLabel="puff-loading"
    timeout={2000}
  />
    </div>
  );
}

export default Spinner;