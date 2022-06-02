import style from './AllPostPage.module.css';
import data from './data.json';
import { useEffect, useState } from 'react';
import { Header } from '../../features/header/Header';
import { ContentTemplate } from '../../templates/content/ContentTemplate';
import { CardList } from '../../ui/card/card-list/CardList';
import { Button } from '../../ui/button/Button';
import { Title } from '../../ui/title/Title';

type AllPostPageProps = {};

export const AllPostPage: React.FC<AllPostPageProps> = () => {
  const [posts, setPosts] = useState<typeof data | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
    }, 1000);
  }, []);

  return (
    <div className={style.container}>
      <Header></Header>
      <ContentTemplate
        title={
          <div className={style.row}>
            <Title>My posts</Title>
            <Button className={style.button}>+Add</Button>
          </div>
        }
      >
        <CardList data={posts ?? []}></CardList>
      </ContentTemplate>
    </div>
  );
};
