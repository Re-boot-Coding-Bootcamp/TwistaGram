import { Box, alpha } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import theme from "~/theme";

interface Props {
  imageUrl: string;
  onCloseImage?: () => void;
  disabled?: boolean;
}

function ImageContainer({ imageUrl, onCloseImage, disabled = false }: Props) {
  return (
    <Box
      height="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="white"
      position="relative"
    >
      <Box
        id="image-container"
        component="img"
        alt="image-being-posted"
        src={imageUrl}
        width={"100%"}
        borderRadius="12px"
      />

      {onCloseImage && (
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            cursor: "pointer",
            backgroundColor: "rgba(15, 20, 25, 0.75)",
            height: "25px",
            width: "25px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "rgba(15, 20, 25, 0.9)",
            },
            m: 1,
            zIndex: 3,
          }}
        >
          <CloseIcon
            fontSize="small"
            onClick={onCloseImage}
            sx={{ color: "white" }}
          />
        </Box>
      )}

      {disabled && (
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            left: 0,
            backgroundColor: alpha(theme.palette.grey[700], 0.8),
            height: "100%",
            zIndex: 4,
          }}
        ></Box>
      )}
    </Box>
  );
}

export { ImageContainer };
