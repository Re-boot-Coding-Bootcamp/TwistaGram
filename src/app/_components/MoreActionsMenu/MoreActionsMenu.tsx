import React from "react";
import {
  ClickAwayListener,
  IconButton,
  Popper,
  Tooltip,
  Paper,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export type MoreActionsMenuProps = {
  onDelete: () => void;
  onEdit: () => void;
};

const MoreActionsMenu: React.FC<MoreActionsMenuProps> = ({
  onDelete,
  onEdit,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="More">
        <IconButton color="primary" ref={anchorRef} onClick={handleToggle}>
          <MoreHorizIcon />
        </IconButton>
      </Tooltip>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <List component="nav" dense>
              <ListItemButton onClick={onDelete} style={{ color: "red" }}>
                <ListItemIcon>
                  <DeleteIcon style={{ color: "red" }} />
                </ListItemIcon>
                <ListItemText primary="Delete" />
              </ListItemButton>
              <ListItemButton onClick={onEdit}>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Edit" />
              </ListItemButton>
            </List>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
};

export { MoreActionsMenu };
