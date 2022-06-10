import style from './TabContent.module.css';

type TabContentProps = {
  id: string;
  activeTab: string;
  children: React.ReactNode;
};

export const TabContent: React.FC<TabContentProps> = ({
  id,
  activeTab,
  children,
}) => {
  return activeTab === id ? (
    <div className={style.content}>{children}</div>
  ) : null;
};
