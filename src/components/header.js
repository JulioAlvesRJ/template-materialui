import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuClick = () => {
    console.log("Menu button clicked!");
  };

  const handleLoginClick = () => {
    console.log("Login button clicked!");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open menu"
            aria-haspopup="true"
            aria-expanded={isMobile ? "true" : undefined}
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gerenciamento de Projetos
          </Typography>
          <Button color="inherit" onClick={handleLoginClick} aria-label="login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
