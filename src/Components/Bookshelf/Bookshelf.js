import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Table1, Table2, Table3 } from "./Tables.js"

function Bookshelf() {
    return (
        <div style={{ overflowX: 'auto', overflowY: 'auto' }}>
            <Tabs>
                <TabList className="tabs">
                    <Tab>Read</Tab>
                    <Tab>Reading</Tab>
                    <Tab>Recommandations</Tab>
                </TabList>

                <TabPanel>
                    <Table1 />
                </TabPanel>
                <TabPanel>
                    <Table2 />
                </TabPanel>
                <TabPanel>
                    <Table3 />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Bookshelf