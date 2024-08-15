import CollectionComponent from '../../../components/collectionComponent';
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';
import image4 from '../../../assets/images/image7.jpg';
import image5 from '../../../assets/images/image5.jpg';
import image6 from '../../../assets/images/image6.jpg';

const images = [image1, image2, image3, image4, image5, image6];
const overlayTexts = [
  'Image 1',
  'Image 2',
  'Image 3',
  'Image 4',
  'Image 5',
  'Image 6',
];

const Collection = () => {
  return (
    <div>
      <CollectionComponent images={images} overlayTexts={overlayTexts} />
    </div>
  );
};

export default Collection;
