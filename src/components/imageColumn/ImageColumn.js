import ImageCard from './ImageCard'
const ImageColumn = (props) => {
   return props.data.map(index => {
       return <ImageCard key={index}></ImageCard>
   })
}

export default ImageColumn;