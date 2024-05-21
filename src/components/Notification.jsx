import { Link, useLocation } from "react-router-dom";
import * as React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export default function SimpleBottomNavigation() {
  const location = useLocation();

  const navItems = [
    { label: "Home", icon: <HomeIcon />, path: "/" },
    { label: "Leaderboard", icon: <LeaderboardIcon />, path: "/Leaderboard" },
    // { label: "Nearby", icon: <LocationOnIcon />, path: "/Share" }
  ];

  const currentPath = location.pathname;
  const currentIndex = navItems.findIndex(item => item.path === currentPath);

  const [value, setValue] = React.useState(currentIndex === -1 ? 0 : currentIndex);

  React.useEffect(() => {
    if (currentIndex !== value) {
      setValue(currentIndex);
    }
  }, [currentIndex, value]);

  return (
    <Box sx={{
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={item.icon}
            component={Link}
            to={item.path}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
