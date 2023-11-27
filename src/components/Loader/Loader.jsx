import Spinner from 'react-bootstrap/Spinner'
import s from './Loader.module.css'

export default function Loader() {
    return (
        <Spinner className={s.spinner} animation="grow" variant="dark" />
      )
}