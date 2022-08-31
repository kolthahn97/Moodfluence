import { Grid, Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system';
import UserAvatar from 'components/avatar/UserAvatar';
import { useState } from 'react';
import styles from './Profile.module.scss'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Profile({user}) {
    const [ tabValue, setTabValue ] = useState(0)
    
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return <Grid 
        container 
        className='profile'
        justifyContent='center'
        alignItems='center'
    >
        <Grid item xs={12} md={9} lg={6}>
            <Grid container sx={{my:3}}>
                <Grid item xs={12}>
                    <Typography component='div' variant='h4'>{user?.displayName}</Typography>
                </Grid>
            </Grid>
            <Tabs value={tabValue} onChange={handleChange} aria-label='Profile Tabs'>
                <Tab label='Item One' {...a11yProps(0)} />
                <Tab label='Item Two' {...a11yProps(1)} />
                <Tab label='Item Three' {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                Item Three
            </TabPanel>
        </Grid>
    </Grid>
}