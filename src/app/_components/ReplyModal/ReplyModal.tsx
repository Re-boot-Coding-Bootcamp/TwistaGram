// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   IconButton,
//   Snackbar,
//   TextField,
//   Typography,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import Image from "next/image";

// interface ReplyModalProps {
//   open: boolean;
//   onClose: () => void;
// }

// const ReplyModal: React.FC<ReplyModalProps> = ({ open, onClose }) => {
//   const [reply, setReply] = useState("");
//   const [replyPosted, setReplyPosted] = useState(false);

//   const handleReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setReply(event.target.value);
//   };

//   const handleReply = () => {
//     // Simulating reply submission
//     setTimeout(() => {
//       setReplyPosted(true);
//       setTimeout(() => {
//         onClose();
//         setReply("");
//         setReplyPosted(false);
//       }, 3000); // Close the modal after 3 seconds
//     }, 1000); // Simulate delay for reply submission
//   };

//   const handleCloseSnackbar = () => {
//     setReplyPosted(false);
//   };

//   // Format date function using JavaScript's built-in Date object
//   const formatDate = (date: Date): string => {
//     const monthNames = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];
//     const day = date.getDate();
//     const monthIndex = date.getMonth();
//     const year = date.getFullYear();
//     return `${monthNames[monthIndex]} ${day}, ${year}`;
//   };

//   return (
//     <>
//       <Dialog open={open} onClose={onClose} fullWidth>
//         <DialogTitle>
//           <IconButton
//             sx={{ position: "absolute", top: 5, right: 5 }}
//             onClick={onClose}
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           {/* Replace this with actual post person's avatar, name, username, time of post, and post content */}
//           <Box sx={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
//             <Image
//               src="/avatar.png"
//               alt="Avatar"
//               width="50"
//               height="50"
//               //   borderRadius="50"
//               //marginRight="10"
//             />
//             <Box>
//               <Typography>Name</Typography>
//               <Typography>Username</Typography>
//               <Typography>{formatDate(new Date())}</Typography>
//               <Typography>Post content</Typography>
//             </Box>
//           </Box>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="reply"
//             label="Your Reply"
//             fullWidth
//             multiline
//             rows={4}
//             value={reply}
//             onChange={handleReplyChange}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={onClose}>Cancel</Button>
//           <Button
//             onClick={handleReply}
//             variant="contained"
//             color="primary"
//             disabled={!reply.trim()}
//           >
//             Reply
//           </Button>
//         </DialogActions>
//       </Dialog>
//       <Snackbar
//         open={replyPosted}
//         autoHideDuration={3000}
//         onClose={handleCloseSnackbar}
//         message="Your reply was posted!"
//       />
//     </>
//   );
// };

// export { ReplyModal };

import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar } from "../Avatar";
import theme from "~/theme";

interface ReplyModalProps {
  name: string;
  userName: string;

  open: boolean;
  onClose: () => void;
}

const ReplyModal: React.FC<ReplyModalProps> = ({
  open,
  onClose,
  name,
  userName,
}) => {
  const [reply, setReply] = useState("");
  const [replyPosted, setReplyPosted] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const handleReplyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReply(event.target.value);
  };

  const handleReply = () => {
    // Simulating reply submission
    setTimeout(() => {
      setReplyPosted(true);
      setTimeout(() => {
        onClose(); // Close the modal after posting reply
        setReply("");
        setReplyPosted(false);
      }, 3000); // Close the modal after 3 seconds
    }, 1000); // Simulate delay for reply submission
  };

  const handleClose = () => {
    onClose();
    setReply(""); // Clear reply when closing
  };

  const handleCloseSnackbar = () => {
    setReplyPosted(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>
          <IconButton
            sx={{ position: "absolute", top: 5, right: 5, color: "white" }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
              gap: 1,
            }}
          >
            <Avatar size={isMobile ? "medium" : "large"} />
            <Typography>{name}</Typography>
            <Typography></Typography>
            <Typography>@{userName}</Typography>
            <Typography>
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </Typography>
            <Typography>Post content</Typography>
          </Box>

          <TextField
            variant="outlined"
            autoFocus
            margin="dense"
            id="reply"
            label="Your Reply"
            fullWidth
            multiline
            rows={4}
            value={reply}
            onChange={handleReplyChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleReply}
            variant="contained"
            color="primary"
            disabled={!reply.trim()}
            sx={{ ml: 1 }}
          >
            Reply
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={replyPosted}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Your reply was posted!"
      />
    </>
  );
};

export default ReplyModal;

export { ReplyModal };
