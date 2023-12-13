import s from './Loader.module.css'

import { BounceLoader } from 'react-spinners';

export default function Loader() {
  return (
  <BounceLoader color="#00D7FF" className={s.spinner}/>
  );
}