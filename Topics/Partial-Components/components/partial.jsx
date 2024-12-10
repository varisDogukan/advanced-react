export const partialComponent = (Component, partialProps) => {
  // eslint-disable-next-line react/display-name
  return (props) => <Component {...partialProps} {...props} />;
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export const RedButton = partialComponent(Button, { color: "crimson" });
export const SmallRedButton = partialComponent(RedButton, { size: "small" });
