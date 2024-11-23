import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

function Message() {
  const [dialog, setDialog] = useState(true);

  return (
    <Dialog
      open={dialog}
      onClose={() => setDialog((prev) => !prev)}
      className="capitalize backdrop-blur-sm"
      component="div"
      maxWidth="md"
    >
      <Box className="!h-full">
        <DialogTitle className="text-center !text-2xl">
          Notice: Site Under Construction
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="text-justify !font-light !leading-loose lg:text-center">
            Thank you for visiting my portfolio! <br /> Please note that the
            site is still a work in progress, and I'm actively working on adding
            new features and projects. Feel free to check back soon for a more
            complete experience, or if you need more information, don't hesitate
            to reach out! Thank you for your understanding,
            <br />
            Nnamdi James
          </DialogContentText>
        </DialogContent>
        <DialogActions className="flex !justify-center">
          <Button
            variant="contained"
            onClick={() => setDialog((prev) => !prev)}
            className="!bg-util !p-3 !font-medium !text-secondary"
          >
            okay
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default Message;
