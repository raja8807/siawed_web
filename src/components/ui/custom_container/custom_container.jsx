import { Container } from "react-bootstrap";

const CustomContainer = ({ children, lg }) => {
  return (
    <Container
      style={{
        height: "100%",
        // maxWidth: lg && "1500px",
        padding:'50px 0'
      }}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
