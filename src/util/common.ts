export const logout = async (signOut, navigate) => {
    try {
    await signOut();
    navigate("/login");
  } catch (error) {
    console.error("Error during sign-out:", error);
  }
}
