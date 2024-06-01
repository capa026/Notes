const PageDefaultLayout = ({ children, styles }) => {
  return <div className={`container mx-auto mt-3 ${styles}`}>{children}</div>;
};
export default PageDefaultLayout;
