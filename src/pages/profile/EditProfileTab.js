import { Button, Grid, Stack, Tab, Tabs, TextField, Typography } from '@mui/material'
import { updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import styles from './Profile.module.scss'

export default function EditProfileTab({user}) {
    const displayName = user?.displayName ? user?.displayName.split(' ') : ' '
    const firstName = displayName[0]
    const lastName = displayName[1]

    const [ firstNameValue, setFirstNameValue ] = useState(firstName)
    const [ lastNameValue, setLastNameValue ] = useState(lastName)
    const [ emailValue, setEmailValue ] = useState(user.email)

    useEffect(() => {
        setFirstNameValue(firstName)
    }, [firstName])

    useEffect(() => {
        setLastNameValue(lastName)
    }, [lastName])

    useEffect(() => {
        setEmailValue(user.email)
    }, [user.email])

    const isSame = firstNameValue === firstName && lastNameValue === lastName && emailValue === user.email

    return <>
        <Typography component='h3' variant='h6'>Profile Information</Typography>
        <Grid container sx={{px:3}}>
            <Stack spacing={2} sx={{width:'100%'}}>
                <Stack direction='row' spacing={2} sx={{width:'100%'}}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            multiline
                            id='firstName'
                            label='First Name'
                            name='firstName'
                            variant='standard'
                            value={firstNameValue}
                            onChange={(event) => setFirstNameValue(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            multiline
                            id='lastName'
                            label='Last Name'
                            name='lastName'
                            variant='standard'
                            value={lastNameValue}
                            onChange={(event) => setLastNameValue(event.target.value)}
                        />
                    </Grid>
                </Stack >
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        multiline
                        id='email'
                        label='Email Address'
                        name='email'
                        variant='standard'
                        value={emailValue}
                        onChange={(event) => setEmailValue(event.target.value)}
                    />
                </Grid>
                <Stack direction='row' spacing={2} justifyContent='flex-end' sx={{width:'100%'}}>
                    <Button 
                        color='primary'
                        variant='contained'
                        disabled={isSame}
                        onClick={() => {
                            updateProfile(user, {
                                displayName:`${firstNameValue} ${lastNameValue}`
                            }).then(() => {
                                console.log('Profile Updated')
                                window.location.reload()
                            }).catch((error) => {
                                console.error(error.message)
                            })
                        }}
                    >
                        Save
                    </Button>
                    <Button 
                        color='secondary'
                        variant='contained'
                        disabled={isSame}
                        onClick={() => {
                            setFirstNameValue(firstName)
                            setLastNameValue(lastName)
                            setEmailValue(user.email)
                        }}
                    >
                        Discard
                    </Button>
                </Stack>
            </Stack>
        </Grid>
    </>
}