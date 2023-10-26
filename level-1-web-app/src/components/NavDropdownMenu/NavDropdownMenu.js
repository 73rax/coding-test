import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function NavDropdownMenu({ header, option}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        className="header-nav__button"
        sx={
            {
              fontFamily: "Typo Quick",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: 'white',
              textTransform: "none",
            }
        }
      >
        {header}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>{option} 1</MenuItem>
        <MenuItem onClick={handleClose}>{option} 2</MenuItem>
        <MenuItem onClick={handleClose}>{option} 3</MenuItem>
      </Menu>
    </div>
  );
}


export default NavDropdownMenu;