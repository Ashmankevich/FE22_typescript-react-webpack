import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AppPages } from '../../../types';
import { Button } from '../../../ui/button/Button';
import { Input } from '../../../ui/input/Input';
import { Textarea } from '../../../ui/text-area/TextArea';
import { actions } from './addPostSlice';
import style from './Form.module.css';

type FormProps = {};

export const Form: React.FC<FormProps> = () => {
  const [title, setTitle] = useState('');
  const [URL, setURL] = useState('');
  const [publish, setPublish] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  const id = useAppSelector((state) => state.addPost.post?.id);
  const [step, setStep] = useState<'initial' | 'submitted'>('initial');
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 'submitted' && id != null) {
      navigate(`${AppPages.POST_PAGE}/${id}`);
    }
  }, [id, step, navigate]);

  return (
    <form
      className={style.container}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          actions.addPost({
            text: text,
            lesson_num: 0,
            title: title,
            image: image,
          })
        );
        setStep('submitted');
      }}
    >
      <div className={style.groupFour}>
        <Input
          className={style.input}
          label="Title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></Input>
        <Input
          className={style.input}
          label="URL"
          type="text"
          value={URL}
          onChange={(event) => setURL(event.target.value)}
        ></Input>
        <Input
          className={style.input}
          label="Publish"
          type="text"
          value={publish}
          onChange={(event) => setPublish(event.target.value)}
        ></Input>
        <Input
          label="Image"
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] ?? null)}
        ></Input>
      </div>
      <div className={style.groupTwo}>
        <Textarea
          className={style.area}
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Textarea>
        <Textarea
          className={style.text}
          label="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></Textarea>
      </div>
      <div className={style.groupButtons}>
        <Button type="reset">Cancel</Button>
        <Button type="submit">Add post</Button>
      </div>
    </form>
  );
};
