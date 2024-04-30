import Card from './Card';
import { dummyData } from '../../db';

const Cards = ({setState}) => {
  return (
    <>
        {
            dummyData.map((item) => (
                <Card key={item.name} name={item.name} price={item.price} description={item.description} image={item.image}  setState={setState}/>
            ))
        }
    </>
  )
}

export default Cards