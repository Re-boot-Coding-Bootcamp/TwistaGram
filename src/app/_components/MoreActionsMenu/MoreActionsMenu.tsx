import React from "react";
import {
  ClickAwayListener,
  IconButton,
  Popper,
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
  onEdit?: () => void;
};

const MoreActionsMenu: React.FC<MoreActionsMenuProps> = ({
  onDelete,
  onEdit,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
      return;
    }
    setOpen(false);
  };

  const handleDeleteClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    onDelete();
  };

  const handleEditClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    onEdit?.();
  };

  return (
    <>
      <IconButton
        sx={{ p: 0 }}
        disableRipple
        color="inherit"
        ref={anchorRef}
        onClick={handleToggle}
      >
        <MoreHorizIcon />
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-end"
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <List component="nav" dense>
              <ListItemButton
                onClick={handleDeleteClick}
                style={{ color: "red" }}
              >
                <ListItemIcon aria-label="delete">
                  <DeleteIcon style={{ color: "red" }} />
                </ListItemIcon>
                <ListItemText primary="Delete" />
              </ListItemButton>
              {onEdit && (
                <ListItemButton onClick={handleEditClick}>
                  <ListItemIcon aria-label="edit">
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText primary="Edit" />
                </ListItemButton>
              )}
            </List>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
};

export { MoreActionsMenu };
