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
    <div className="tab-content">{children}</div>
  ) : null;
};
