import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import roronoazoro from '../../assets/images/roronoazoro.jpg';
import withHits from './withHits';

const Zoro = ({countHits, hits, life, arlongLife, setArlongLife}) => {

  const handleClick = ()=>{
    countHits()
    setArlongLife(arlongLife - 10)
  }

  return (
    <div className='d-flex flex-column' style={{width: "200px"}}>
      <div className='text-center'>
        <img src={roronoazoro} style={{height: "350px"}}/>
      </div>
      <button onClick={handleClick} className='btn btn-success'>Zoro attaque</button>
      <div className='mt-2 d-flex justify-content-around'>
        <span className='badge text-bg-warning'>
          <FontAwesomeIcon icon={faHandFist}/> {hits}
        </span>
        <span className='badge text-bg-success'>
          <FontAwesomeIcon icon={faGratipay}/> {life}%
        </span>
      </div>
    </div>
  );
};

export default withHits(Zoro);
