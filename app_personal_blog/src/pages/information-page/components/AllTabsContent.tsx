import style from './AllTabsContent.module.css';
import { useState } from 'react';
import { FirstTab } from './FirstTab';
import { SecondTab } from './SecondTab';
import { ThirdTab } from './ThirdTab';
import { TabNav } from './TabNav';
import { TabContent } from './TabContent';

type AllTabsContentProps = {};

export const AllTabsContent: React.FC<AllTabsContentProps> = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className={style.wrapper}>
      <ul className={style.nav}>
        <TabNav
          title="Tab 1"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></TabNav>
        <TabNav
          title="Tab 2"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></TabNav>
        <TabNav
          title="Tab 3"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></TabNav>
      </ul>
      <div className={style.content}>
        <TabContent id="tab1" activeTab={activeTab}>
          <FirstTab></FirstTab>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <SecondTab></SecondTab>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <ThirdTab></ThirdTab>
        </TabContent>
      </div>
    </div>
  );
};
