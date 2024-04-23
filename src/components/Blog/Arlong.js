import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandFist } from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import arlong from '../../assets/images/arlong.jpg';
import withHits from './withHits';

const Arlong = ({countHits, hits, life, zoroLife, setZoroLife}) => {

  const handleClick = ()=>{
    countHits()
    setZoroLife(zoroLife - 10)
  }

  return (
    <div className='d-flex flex-column' style={{width: "200px"}}>
      <div className='text-center'>
        <img src={arlong} style={{height: "350px"}}/>
      </div>
      <button onClick={()=>handleClick('arlong')} className='btn btn-success'>Arlong attaque</button>
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

export default withHits(Arlong);
