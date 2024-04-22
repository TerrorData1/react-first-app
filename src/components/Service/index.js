import Wrapper from "../Wrapper";
import LifeCycle from "./LifeCycle";
import FuncLifeCycle from "./FuncLifeCycle";


// const index = () => {
//     return (
//         <Wrapper>
//              <h2 className="text-black d-flex justify-content-center pt-5 fw-bold">Page Service</h2>  
//              {/* <LifeCycle name={"JOHN"}/> */}
//              <FuncLifeCycle />
//         </Wrapper>
//     );
// };


const index = () => {
    return (
      <Wrapper>
        <FuncLifeCycle/>
      </Wrapper>
    );
  };

export default index;