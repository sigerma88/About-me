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
                    <Tab>Recommendations</Tab>
                </TabList>

                <TabPanel className = "Table1-2" >
                    <Table1 />
                    <p>This list is incomplete :(</p>
                    <p>Many more books will be added in the future!</p>
                </TabPanel>
                <TabPanel className = "Table1-2" >
                    <Table2 />
                </TabPanel>
                <TabPanel>
                    <Table3 />
                    <p>Currently, recommendations are not recorded :(</p>
                    <p>So, if you really want to make a recommendation, don't hesitate to send me an email!</p>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Bookshelf