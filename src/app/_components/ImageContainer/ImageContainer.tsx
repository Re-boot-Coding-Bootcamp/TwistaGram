import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  imageUrl: string;
  onCloseImage: () => void;
}

function ImageContainer({ imageUrl, onCloseImage }: Props) {
  return (
    <Box
      height="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      // will change background color once one is decided
      bgcolor="white"
    >
      <Box position="relative" padding={3}>
        <Box
          id="image-container"
          component="img"
          alt="image-being-posted"
          src={imageUrl}
          width={1}
        />
        <Box
          sx={{
            position: "absolute",
            float: "right",
            right: 0,
            top: 0,
            cursor: "pointer",
          }}
        >
          <CloseIcon fontSize="small" onClick={onCloseImage} />
        </Box>
      </Box>
    </Box>
  );
}

export { ImageContainer };
