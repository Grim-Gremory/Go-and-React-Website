import React from 'react'
export default function Devices() {
  const [open, setOpen] = React.useState(true);
  const [opens, setOpenSettings] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickSettings = () => {
    setOpenSettings(!opens);
  };

  return (
    // <List
    //   sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    //   component="nav"
    //   aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader component="div" id="nested-list-subheader">
    //       Nested List Items
    //     </ListSubheader>
    //   }
    // >

    //   <ListItemButton onClick={handleClick}>
    //     <ListItemIcon>
    //       <InboxIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Inbox" />
    //     {open ? <ExpandLess /> : <ExpandMore />}
    //   </ListItemButton>

    //   <Collapse in={open} timeout="auto" unmountOnExit>
    //     <List component="div" disablePadding>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <StarBorder />
    //         </ListItemIcon>
    //         <ListItemText primary="Starred" />
    //       </ListItemButton>
    //     </List>
    //   </Collapse>

    //   <ListItemButton onClick={handleClickSettings}>
    //     <ListItemIcon>
    //       <InboxIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Settings" />
    //     {opens ? <ExpandLess /> : <ExpandMore />}
    //   </ListItemButton>

    //   <Collapse in={opens} timeout="auto" unmountOnExit>
    //     <List component="div" disablePadding>
    //       <ListItemButton sx={{ pl: 4 }}>
    //         <ListItemIcon>
    //           <SettingsIcon />
    //         </ListItemIcon>
    //         <ListItemText primary="Starred" />
    //       </ListItemButton>
    //     </List>
    //   </Collapse>

    // </List>
    <div>hi</div>
  );
}
