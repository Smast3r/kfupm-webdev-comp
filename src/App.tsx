
import PlanContainer from './components/PlanContainer';
import { TermsContext, TermsContextProvider } from './contexts/TermsContext';
import './index.css';

function App() {
  return (
    <TermsContextProvider>
      <>
      <div className='text-cyan-900'>
      <div className="flex justify-center ">
      <div className='w-full bg-cyan-600  drop-shadow-sm my-3 align-middle rounded mx-10 h-20 flex justify-between px-5 items-center'>
      <div className='text-2xl font-bold text-white'>Planee</div>
      <div>this should be somthing else </div>
      </div>
      </div>
      <PlanContainer />
      </div>
      </>
    </TermsContextProvider>
  );
}

export default App;
