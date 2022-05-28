import { Descriptions } from 'antd';
import { useCart } from "../../recoil/hooks/useCart";

const Summary = () => {
  const [items] = useCart();
  return(
  <Descriptions title="Selected configuration for the project">
    {Object.keys(items).map(key => (
      <Descriptions.Item key={key} label={key}>{items[key]}</Descriptions.Item>))}
  </Descriptions>
)};

export default Summary;
