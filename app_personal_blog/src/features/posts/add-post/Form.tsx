import { useState } from 'react';
import { Button } from '../../../ui/button/Button';
import { Input } from '../../../ui/input/Input';
import style from './Form.module.css';

type FormProps = {};

export const Form: React.FC<FormProps> = () => {
  const [title, setTitle] = useState('');
  const [URL, setURL] = useState('');
  const [publish, setPublish] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');

  return (
    <form className={style.container}>
      <div className={style.groupFour}>
        <Input
          label="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></Input>
        <Input
          label="URL"
          type="text"
          value={URL}
          onChange={(event) => setURL(event.target.value)}
        ></Input>
        <Input
          label="publish"
          type="text"
          value={publish}
          onChange={(event) => setPublish(event.target.value)}
        ></Input>
        <Input
          label="image"
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        ></Input>
      </div>
      <div className={style.groupTwo}>
        <Input
          label="description"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></Input>
        <Input
          label="text"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></Input>
      </div>
      <div className={style.groupButtons}>
        <Button>Cancel</Button>
        <Button>Add</Button>
      </div>
    </form>
  );
};
