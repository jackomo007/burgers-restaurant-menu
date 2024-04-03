import NavigationBar from "./Navbar";
import styled from "styled-components";
import HomePage from "../pages/HomePage";

const Container = styled.div`
  width: 100%;
`;

const Layout = () => {
  return (
    <Container>
      <NavigationBar />
      <HomePage />
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
