import style from './AllTabsContent.module.css';
import { useState } from 'react';
import { FirstTab } from '../separated-tabs/FirstTab';
import { SecondTab } from '../separated-tabs/SecondTab';
import { ThirdTab } from '../separated-tabs/ThirdTab';
import { TabNav } from '../tab-navigation/TabNav';
import { TabContent } from '../tab-content/TabContent';

type AllTabsContentProps = {};

export const AllTabsContent: React.FC<AllTabsContentProps> = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className={style.row}>
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
      <div className={style.wrapper}>
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
