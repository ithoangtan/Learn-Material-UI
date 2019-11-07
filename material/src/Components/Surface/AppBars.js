import React, { Component } from "react";
import {
   AppBar,
   Toolbar,
   IconButton,
   Typography,
   withStyles,
   Menu,
   MenuItem,
   Badge,
   InputBase
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

import styles from "./styles.appbars";

const menuId = "primary-search-account-menu";
const mobileMenuId = "primary-search-account-menu-mobile";
class AppBars extends Component {
   constructor(props) {
      super(props);
      this.state = {
         anchorEl: null,
         mobileMoreAnchorEl: null
      };
   }
   setAnchorEl = anchorEl => {
      this.setState({ anchorEl: anchorEl });
   };
   setMobileMoreAnchorEl = mobileMoreAnchorEl => {
      this.setState({ mobileMoreAnchorEl: mobileMoreAnchorEl });
   };
   isMenuOpen = anchorEl => Boolean(anchorEl);
   isMobileMenuOpen = mobileMoreAnchorEl => Boolean(mobileMoreAnchorEl);
   handleProfileMenuOpen = event => {
      this.setAnchorEl(event.currentTarget);
   };

   handleMobileMenuClose = () => {
      this.setMobileMoreAnchorEl(null);
   };

   handleMenuClose = () => {
      this.setAnchorEl(null);
      this.handleMobileMenuClose();
   };

   handleMobileMenuOpen = event => {
      this.setMobileMoreAnchorEl(event.currentTarget);
   };

   renderMenu = () => {
      const { anchorEl } = this.state;
      return (
         <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={this.isMenuOpen}
            onClose={this.handleMenuClose}
         >
            <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
         </Menu>
      );
   };

   renderMobileMenu = () => {
      const { mobileMoreAnchorEl } = this.state;
      return (
         <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={this.isMobileMenuOpen}
            onClose={this.handleMobileMenuClose}
         >
            <MenuItem>
               <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={4} color="secondary">
                     <MailIcon />
                  </Badge>
               </IconButton>
               <p>Messages</p>
            </MenuItem>
            <MenuItem>
               <IconButton
                  aria-label="show 11 new notifications"
                  color="inherit"
               >
                  <Badge badgeContent={11} color="secondary">
                     <NotificationsIcon />
                  </Badge>
               </IconButton>
               <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={this.handleProfileMenuOpen}>
               <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
               >
                  <AccountCircle />
               </IconButton>
               <p>Profile</p>
            </MenuItem>
         </Menu>
      );
   };

   render() {
      const mobileMenuId = "primary-search-account-menu-mobile";
      const { classes } = this.props;
      return (
         <div className={classes.grow}>
            <AppBar position="static">
               <Toolbar>
                  <IconButton
                     edge="start"
                     className={classes.menuButton}
                     color="inherit"
                     aria-label="open drawer"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography className={classes.title} variant="h6" noWrap>
                     Material-UI
                  </Typography>
                  <div className={classes.search}>
                     <div className={classes.searchIcon}>
                        <SearchIcon />
                     </div>
                     <InputBase
                        placeholder="Search…"
                        classes={{
                           root: classes.inputRoot,
                           input: classes.inputInput
                        }}
                        inputProps={{ "aria-label": "search" }}
                     />
                  </div>
                  <div className={classes.grow} />
                  <div className={classes.sectionDesktop}>
                     <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                           <MailIcon />
                        </Badge>
                     </IconButton>
                     <IconButton
                        aria-label="show 17 new notifications"
                        color="inherit"
                     >
                        <Badge badgeContent={17} color="secondary">
                           <NotificationsIcon />
                        </Badge>
                     </IconButton>
                     <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={this.handleProfileMenuOpen}
                        color="inherit"
                     >
                        <AccountCircle />
                     </IconButton>
                  </div>
                  <div className={classes.sectionMobile}>
                     <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={this.handleMobileMenuOpen}
                        color="inherit"
                     >
                        <MoreIcon />
                     </IconButton>
                  </div>
               </Toolbar>
            </AppBar>
            {this.renderMobileMenu}
            {this.renderMenu}
         </div>
      );
   }
}

export default withStyles(styles)(AppBars);
