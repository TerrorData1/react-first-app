import Zoro from './Zoro';
import Arlong from './Arlong';
import { useState } from 'react';

const Hoc = () => {

  const [arlongLife, setArlongLife] = useState(100)
  const [zoroLife, setZoroLife] = useState(100)

  const reduceLife = (param) => {
    if (param === "zoro") {
      setArlongLife(arlongLife - 10)
    } else if (param === "arlong") {
      setZoroLife(zoroLife - 10)
    }
  }

  return (
    <div className='container text-center'>
    <div className='row justify-content-center'>
      <div className='col-12 col-md-6 my-3 mb-sm-0 d-flex justify-content-between'>
        <Zoro 
        life={zoroLife} 
        arlongLife={arlongLife} 
        setArlongLife={setArlongLife}
        />
        <Arlong 
        life={arlongLife} 
        zoroLife={zoroLife}
        setZoroLife={setZoroLife}
        />
      </div>
    </div>
  </div>
  );
};

export default Hoc;