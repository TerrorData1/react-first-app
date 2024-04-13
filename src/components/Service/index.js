import Wrapper from "../Wrapper";
import LifeCycle from "./LifeCycle";


const index = () => {
    return (
        <Wrapper>
             <h2 className="text-black d-flex justify-content-center pt-5 fw-bold">Page Service</h2>  
             <LifeCycle name={"JOHN"}/>
        </Wrapper>
    );
};

export default index;