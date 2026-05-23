import React, { useEffect, useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';

import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

const navItems = [
  ['Home', 'home'],
  ['Vision', 'vision'],
  ['Leadership', 'expertise'],
  ['Journey', 'history'],
  ['Gallery', 'projects'],
  ['Connect', 'contact']
];

function Navigation({ parentToChild, modeChange }: any) {

  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] =
    useState<boolean>(false);

  const [scrolled, setScrolled] =
    useState<boolean>(false);

  const [activeSection, setActiveSection] =
    useState<string>('home');

  const handleDrawerToggle = () => {

    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

      const sections =
        navItems.map((item) => item[1]);

      let currentSection = 'home';

      sections.forEach((section) => {

        const element =
          document.getElementById(section);

        if (element) {

          const rect =
            element.getBoundingClientRect();

          if (rect.top <= 160) {

            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    handleScroll();

    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };

  }, []);

  const scrollToSection = (section: string) => {

    const element =
      document.getElementById(section);

    if (element) {

      const offset = 70;

      const topPosition =
        element.offsetTop - offset;

      window.scrollTo({
        top: topPosition,
      });

      setActiveSection(section);
    }
  };

  const drawer = (

    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        height: '100%'
      }}
    >

      <p className="mobile-menu-top">
        <ListIcon />
        Menu
      </p>

      <Divider />

      <List>

        {navItems.map((item) => (

          <ListItem
            key={item[0]}
            disablePadding
          >

            <ListItemButton
              sx={{
                textAlign: 'center'
              }}
              onClick={() =>
                scrollToSection(item[1])
              }
            >

              <ListItemText
                primary={item[0]}
              />

            </ListItemButton>

          </ListItem>

        ))}

      </List>

    </Box>
  );

  return (

    <Box sx={{ display: 'flex' }}>

      <CssBaseline />

      <AppBar
        component="nav"
        elevation={0}
        id="navigation"
        className={`${scrolled ? 'scrolled' : ''}`}
        sx={{
          background: 'transparent',
          boxShadow: 'none'
        }}
      >

        <Toolbar className='navigation-bar'>

          <div
            className="brand-name"
            onClick={() =>
              scrollToSection('home')
            }
            style={{
              cursor: 'pointer'
            }}
          >
            #VoteForMurali
          </div>

          <div className="desktop-nav">

            <Box
              sx={{
                display: {
                  xs: 'none',
                  sm: 'flex'
                },
                gap: '4px'
              }}
            >

              {navItems.map((item) => {

                const isActive =
                  activeSection === item[1];

                return (

                  <Button
                    key={item[0]}
                    onClick={() =>
                      scrollToSection(item[1])
                    }
                    className={
                      isActive
                        ? 'nav-active'
                        : ''
                    }
                    sx={{
                      position: 'relative',

                      overflow: 'hidden',

                      transition:
                        'all 0.35s ease',

                      '&::after': {

                        content: '""',

                        position: 'absolute',

                        left: '12%',

                        bottom: '4px',

                        width:
                          isActive
                            ? '76%'
                            : '0%',

                        height: '2px',

                        borderRadius: '999px',

                        background:
                          '#d4af37',

                        transition:
                          'all 0.35s ease'
                      }
                    }}
                  >

                    {item[0]}

                  </Button>
                );
              })}

            </Box>

          </div>

          <div className="nav-actions">

            {mode === 'dark' ? (

              <LightModeIcon
                onClick={() => modeChange()}
              />

            ) : (

              <DarkModeIcon
                onClick={() => modeChange()}
              />
            )}

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                ml: 1,
                display: { sm: 'none' }
              }}
            >

              <MenuIcon />

            </IconButton>

          </div>

        </Toolbar>

      </AppBar>

      <nav>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}

          sx={{
            display: {
              xs: 'block',
              sm: 'none'
            },

            '& .MuiDrawer-paper': {

              boxSizing: 'border-box',

              width: drawerWidth,

              background:
                mode === 'dark'
                  ? 'rgba(16,18,24,0.96)'
                  : 'rgba(255,255,255,0.96)',

              backdropFilter: 'blur(18px)'
            },
          }}
        >

          {drawer}

        </Drawer>

      </nav>

    </Box>
  );
}

export default Navigation;