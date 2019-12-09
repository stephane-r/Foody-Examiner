import React, { useState } from 'react';
import { useMutation } from 'react-apollo';
import UPLOAD from '../../../graphql/mutations/upload';
import Ingredients from '../../Recognition/Ingredients';

// https://www.derbycityweekend.com/wp-content/uploads/2018/02/Charim-Korean-food.jpg
// https://assets.lightspeedhq.com/img/2019/07/8aac85b2-blog_foodpresentationtipsfromtopchefs.jpg
// https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg

interface Upload {
  pantries: any;
  receiveUserPantries: any;
  favoris: any;
  receiveUserFavoris: any;
}

const Upload = (props: Upload): JSX.Element => {
  const [useField, setUseField] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    'https://assets.lightspeedhq.com/img/2019/07/8aac85b2-blog_foodpresentationtipsfromtopchefs.jpg'
  );
  const [search, setSearchFoodImageRecognition] = useState(false);

  const onError = (error: any): any => console.log(error);
  const onCompleted = (data: any): any => console.log(data);

  const [upload] = useMutation(UPLOAD, {
    onError,
    onCompleted
  });

  const handleChange = ({
    target: {
      files: [file]
    }
  }: any): any => upload({ variables: { file, ref: 'Toto' } });

  const handleSubmit = (event: any): void => {
    event.preventDefault();

    setSearchFoodImageRecognition(true);
  };

  const handleChangeUrl = (event: any): void => setImageUrl(event.target.value);
  const handleChangeCheckbox = (): void => setUseField(!useField);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="checkbox">
          Upload my picture
          <input
            checked={useField}
            type="checkbox"
            id="checkbox"
            onChange={handleChangeCheckbox}
          />
        </label>
      </div>
      {useField ? (
        <input type="file" onChange={handleChange} />
      ) : (
        <input type="text" onChange={handleChangeUrl} />
      )}
      {search && <Ingredients url={imageUrl} {...props} />}
    </form>
  );
};

export default Upload;
