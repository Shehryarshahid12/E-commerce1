
import { Tabs } from 'antd';

// const onChange = (key) => {
//   console.log(key);
// };

const items = [
  {
    key: '1',
    label: `Description`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];
const Tabbing = ({data, defaultActiveKey, onChange}) => 
    <Tabs defaultActiveKey={defaultActiveKey} items={data} onChange={onChange} />;
export default Tabbing;