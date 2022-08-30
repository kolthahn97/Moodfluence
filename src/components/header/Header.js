import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideMenu from 'components/sideMenu/SideMenu';
import { useState } from 'react';
import styles from './Header.module.scss'

export default function Header() {
  const [openSide, setOpenSide] = useState(false);

  return (
    <>
      <SideMenu menuIsOpen={openSide} setIsOpen={setOpenSide} />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenSide(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h1" className={styles.name}>
            News
          </Typography>
          <Button color="inherit" href='login'>Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
