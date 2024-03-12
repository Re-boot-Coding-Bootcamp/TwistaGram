import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  TextField,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { Avatar } from "../Avatar";
import Divider from "@mui/material/Divider";
import { Button } from "../Button";

function CreatePost() {
  return (
    <>
      <Box id="create-post-main-container">
        <Box
          id="content"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={1}
          mb={2}
        >
          <Avatar size="medium" />
          <TextField
            variant="standard"
            fullWidth
            // get rid of Mui underline style
            InputProps={{ disableUnderline: true }}
            multiline
            placeholder="What is happening?!"
          ></TextField>
        </Box>
        <Divider />
        <BottomNavigation
          sx={{ display: "flex", justifyContent: "space-between" }}
          showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <Box id="icon-pickers-containerF">
            <BottomNavigationAction label="Recents" icon={<ImageIcon />} />
            <BottomNavigationAction label="Favorites" icon={<ImageIcon />} />
          </Box>
          <Box>
            {" "}
            <Button
              text="Post"
              onClick={() => {
                alert("Hello");
              }}
            />
          </Box>
        </BottomNavigation>
      </Box>
    </>
  );
}

export { CreatePost };
