import { memo } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
interface ImageModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

export const ImageModal = memo<ImageModalProps>(
  ({ selectedImage, onClose }) => {
    return (
      <Dialog
        open={!!selectedImage}
        onClose={onClose}
        maxWidth="lg"
        fullWidth
        slots={{
          backdrop: Backdrop,
        }}
        slotProps={{
          paper: {
            sx: {
              bgcolor: "transparent",
              boxShadow: "none",
              overflow: "visible",
            },
          },
          backdrop: {
            sx: { bgcolor: "rgba(0, 0, 0, 0.8)" },
          },
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "fixed",
            top: 20,
            right: 20,
            color: "white",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              bgcolor: "rgba(0, 0, 0, 0.7)",
            },
            zIndex: 1,
          }}
        >
          <span className="material-icons-outlined">close</span>
        </IconButton>
        <DialogContent sx={{ p: 0 }}>
          <Box
            component="img"
            src={selectedImage || ""}
            alt="Zoomed image"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </DialogContent>
      </Dialog>
    );
  }
);

ImageModal.displayName = "ImageModal";
