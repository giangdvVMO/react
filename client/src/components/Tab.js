import { Tab } from "@headlessui/react";

const Tabs = () => {
    return (
        <>
            <div>
                Hi everyone
            </div>
            <Tab.Group>
                <Tab.List>
                    <Tab>List1</Tab>
                    <Tab>List2</Tab>
                    <Tab>List3</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>Content List1</Tab.Panel>
                    <Tab.Panel>Content List2</Tab.Panel>
                    <Tab.Panel>Content List3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </>
    );
}

export default Tabs;