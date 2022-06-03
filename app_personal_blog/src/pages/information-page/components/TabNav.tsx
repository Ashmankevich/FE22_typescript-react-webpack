type TabNavProps = {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

export const TabNav: React.FC<TabNavProps> = ({
  id,
  title,
  activeTab,
  setActiveTab,
}) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? 'active' : ''}>
      {title}
    </li>
  );
};
