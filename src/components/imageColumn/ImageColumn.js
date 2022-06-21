import ImageCard from './ImageCard';
import { useSelector } from "react-redux";

const ImageColumn = (props) => {
  const media= useSelector((state) => state.media);
  const position = props.position * 15;
  let data;

  if(!media.loading){
    data = media.data.slice(position, position + 15);
    return data.map(index => {
        return <ImageCard key={index.id} content= {index}></ImageCard>
    });
  }
  else {
    return props.data.map(index => {
        return <ImageCard key={index}></ImageCard>
    });
  }

   
}

export default ImageColumn;