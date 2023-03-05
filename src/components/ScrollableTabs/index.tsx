import { FC, useState, SyntheticEvent, ReactElement } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const ScrollableTabs: FC<Props> = ({ children, tabs }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const renderTabBtn = () => {
        return tabs.map((tab, index) => (
            <Tab label={tab} key={index + tab} />
        ))
    }

    const renderTabPanels = () => {
        return children.map((child, index) => {
            if (value === index) {
                return (
                    <div key={'tab-panel' + index}>
                        {child}
                    </div>
                )
            }

            return null
        })
    }

    return (
        <>
            <Box sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', justifyContent: 'center' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {renderTabBtn()}
                </Tabs>
            </Box>

            {renderTabPanels()}
        </>
    );
}

interface Props {
    children: ReactElement[]
    tabs: string[]
}

export default ScrollableTabs