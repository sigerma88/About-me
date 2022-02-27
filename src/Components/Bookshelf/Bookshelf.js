import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Bookshelf() {
    return (
        <Tabs>
            <TabList className = "tabs">
                <Tab>Read</Tab>
                <Tab>Reading</Tab>
                <Tab>Recommandations</Tab>
            </TabList>

            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
        </Tabs>
    )
}

export default Bookshelf