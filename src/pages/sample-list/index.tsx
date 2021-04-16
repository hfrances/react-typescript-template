import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MainFrame } from '../../components';
import debug from '../../helpers/debug';

const DEFAULT_COUNT: number = 15;

const SampleListPage = (): JSX.Element => {
  const history = useHistory();
  const [count, setCount] = useState<number>(DEFAULT_COUNT);

  const generate = (count: number, element: (item: number) => JSX.Element): JSX.Element[] | undefined => {
    let elements = new Array<JSX.Element>(count);

    for (let i: number = 0; i < count; i++) {
      elements[i] = element(i + 1);
    }
    return elements;
  }

  useEffect(() => {
    debug.log("Creating component", "SampleList");
  }, []);

  useEffect(() => {
    let query = new URLSearchParams(window.location.search);
    let count = query.get('count') as any as number ?? DEFAULT_COUNT;

    setCount(count);
  }, [history]);

  return (
    <MainFrame headerTitle="List sample" type='scrolled' footerVisibility='fixed'>
      <div>
        {generate(count, item =>
          <div key={item}>
            item {item}
          </div>
        )}
      </div>
    </MainFrame>
  );
};

export { SampleListPage };
export default SampleListPage;