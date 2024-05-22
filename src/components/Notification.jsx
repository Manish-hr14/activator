import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ShareIcon from '@mui/icons-material/Share';
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      
      <List></List>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
         <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
          <BottomNavigationAction label="Leaderboard" icon={<LeaderboardIcon />} component={Link} to="/Leaderboard" />
          <BottomNavigationAction label="Share" icon={<ShareIcon />} component={Link} to="/Share" />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
