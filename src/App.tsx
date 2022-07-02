
import PlanContainer from './components/PlanContainer';
import './index.css';

function App() {
  return (
    <>
    <div className="flex justify-center ">
     <div className='w-full bg-cyan-700  drop-shadow-sm my-3 align-middle rounded mx-10 h-20 flex justify-around'>
     <div>this should be the logo</div>
     <div>this should be somthing else </div>
     </div>
    </div>
    <PlanContainer />
    </>
  );
}

export default App;
