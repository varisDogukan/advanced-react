export const logProps = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};
