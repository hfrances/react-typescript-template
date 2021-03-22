import { SampleService } from '../../services'
import { MainFrame } from '../../components';

const SamplePage = (): JSX.Element => {

  const getSample = async () => {
    await SampleService.get();
  }
  
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