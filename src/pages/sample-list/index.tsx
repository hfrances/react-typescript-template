import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MainFrame } from '../../components';

const SampleListPage = (): JSX.Element => {
  const history = useHistory();
  const [count, setCount] = useState<number>(15);

  const generate = (count: number, element: (item: number) => JSX.Element): JSX.Element[] | undefined => {
    let elements = new Array<JSX.Element>(count);

    for (let i: number = 0; i < count; i++) {
      elements[i] = element(i + 1);
    }
    return elements;
  }

  useEffect(() => {
    let query = new URLSearchParams(window.location.search);
    let count = query.get('count') as any as number ?? 15;

    setCount(count);
  }, [history]);

  return (
    <MainFrame headerTitle="List sample" contentStyle={{ display: 'block' }} footerVisible={true}>
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