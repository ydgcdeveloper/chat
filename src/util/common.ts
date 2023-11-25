export const logout = (signOut, navigate) => {
    try {
    signOut();
    navigate("/login");
  } catch (error) {
    console.error("Error during sign-out:", error);
  }
}
