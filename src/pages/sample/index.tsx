import { useEffect } from 'react';
import { SampleService } from '../../services'
import { MainFrame } from '../../components';
import debug from '../../helpers/debug';

const SamplePage = (): JSX.Element => {

  const getSample = async () => {
    await SampleService.get();
  }
  
  useEffect(() => {
    debug.log("Creating component", "Sample");
  }, []);

  return (
    <MainFrame headerTitle="Service sample" footerVisible={true}>
      <button className="button-link App-link" onClick={() => getSample()}>
        Get sample
      </button>
    </MainFrame>
  );
};

export { SamplePage };
export default SamplePage;