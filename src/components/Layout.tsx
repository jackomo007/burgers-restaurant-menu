import { Outlet } from "react-router-dom";
import NavigationBar from "./Navbar";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Layout = () => {
  return (
    <Container>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </Container>
  );
};

export default Layout;
