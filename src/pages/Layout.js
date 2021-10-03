const Layout = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
