import { SampleService, AuthService } from '../../services'
import { MainFrame } from '../../components';
import { AuthorityToken } from '../../types';
import { useEffect } from 'react';

const SamplePage = (): JSX.Element => {

  const getSample = async () => {
    await SampleService.get();
  }

  const getCredentialsByNtlm = async () => {
    await AuthService.createTokenNtlm()
      .then(getCredentials);
  }

  const getCredentialsByMsal = async () => {
    alert('Not implemented');
  }

  const getCredentialsByHash = async () => {
    await AuthService.createTokenHash()
      .then(getCredentials);
  }

  const getCredentials = async (token: AuthorityToken) => {
    await AuthService.getCredentials(token)
      .then(credentials => {
        let text = `Name: ${credentials.name}\nIP Address: ${credentials.ipAddress}\nHost-name: ${credentials.hostName}`;
        alert(text);
      });
  }

  useEffect(() => {
    console.log("Creando componente", "Samples");
  });

  return (
    <MainFrame headerTitle="Service sample" footerVisible={true}>
      <div>
        <span style={{ margin: '0px 5px' }}>Who-am-i</span>
        <button className="button-link App-link" style={{ margin: '0px 5px' }}
          onClick={() => getCredentialsByNtlm()}
        >
          ntlm
        </button>
        <button className="button-link App-link" disabled style={{ margin: '0px 5px' }}
          onClick={() => getCredentialsByMsal()}
        >
          msal
        </button>
        <button className="button-link App-link" style={{ margin: '0px 5px' }}
          onClick={() => getCredentialsByHash()}
        >
          hash
        </button>
      </div>
      <div>-</div>
      <button className="button-link App-link" onClick={() => getSample()}>
        Get sample
      </button>
    </MainFrame>
  );
};

export { SamplePage };
export default SamplePage;