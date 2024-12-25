import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";

const Logout = () => {
  const [open, setOpen] = useState(false);
  const [authToken, setAuthToken] = useState(null); 
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("authToken");
    setAuthToken(token);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(`${apiUrl}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to logout from the server");
      }

      deleteCookie("authToken");
      setAuthToken(null); 

      signOut({ callbackUrl: "/auth" });
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      handleClose();
    }
  };

  const handleLogin = () => {
    router.push("/auth");
  };

  return (
    <>
      {!session && !authToken ? (
        <button
          onClick={handleLogin}
          className="text-[#171196] flex gap-2 items-center text-lg font-semibold"
        >
          <CgProfile size={30} />
          تسجيل الدخول / الاشتراك
        </button>
      ) : (
        <button
          onClick={handleOpen}
          className="text-[#171196] flex gap-2 items-center text-lg font-semibold"
        >
          <CgProfile size={30} />
          تسجيل الخروج
        </button>
      )}

      <Modal open={open} onClose={handleClose}>
        <Box
          className="modal-container"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 8,
            boxShadow: 24,
            borderRadius: 2,
            maxWidth: 400,
            width: "100%",
          }}
        >
          <Typography variant="h6" gutterBottom>
            هل أنت متأكد أنك تريد تسجيل الخروج؟
          </Typography>
          <Button onClick={handleLogout} color="primary" variant="contained">
            تسجيل الخروج
          </Button>
          <Button onClick={handleClose} color="secondary" variant="outlined" sx={{ mr: 6 }}>
            إلغاء
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Logout;
