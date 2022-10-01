import { Grid, Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { User } from 'firebase/auth'
import { SyntheticEvent } from 'react'
import { useState } from 'react'

import EditProfileTab from './EditProfileTab'

interface TabPanelProps {
	children: JSX.Element
	value: number
	index: number
	other?: any[]
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
	return (
		<div
			role='tabpanel'
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
	)
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

export default function Profile({ user }: { user: User | null }) {
	const [tabValue, setTabValue] = useState<number>(0)

	const handleChange = (event: SyntheticEvent, newValue: any) => {
		setTabValue(newValue)
	}

	return (
		<Grid
			container
			className='profile'
			justifyContent='center'
			alignItems='center'
			sx={{ px: 2 }}
		>
			<Grid item xs={12} md={9} lg={6}>
				<Grid container sx={{ my: 3 }}>
					<Grid item xs={12}>
						<Typography component='div' variant='h4'>
							{user?.displayName}
						</Typography>
					</Grid>
				</Grid>
				<Tabs
					value={tabValue}
					onChange={handleChange}
					aria-label='Profile Tabs'
				>
					<Tab label='Edit Profile' {...a11yProps(0)} />
					<Tab label='Item Two' {...a11yProps(1)} />
					<Tab label='Item Three' {...a11yProps(2)} />
				</Tabs>
				<TabPanel value={tabValue} index={0}>
					<EditProfileTab user={user} />
				</TabPanel>
				<TabPanel value={tabValue} index={1}>
					<Typography>Item Two</Typography>
				</TabPanel>
				<TabPanel value={tabValue} index={2}>
					<Typography>Item Three</Typography>
				</TabPanel>
			</Grid>
		</Grid>
	)
}
