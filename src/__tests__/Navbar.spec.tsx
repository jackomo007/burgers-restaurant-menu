import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IntlProvider } from "react-intl";
import NavigationBar from "../components/Navbar";
import { messages } from "../main";

const currentMessages = messages.en;

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <IntlProvider locale="en" messages={currentMessages}>
      {children}
    </IntlProvider>
  );
};

describe("NavigationBar", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  test("should render MENU as active item", () => {
    render(<NavigationBar />, { wrapper: Providers });

    const menuItem = screen.getAllByText(/MENU/i);
    expect(menuItem[0]).toBeInTheDocument();
  });

  test("should display the login and contact text in uppercase", () => {
    render(<NavigationBar />, { wrapper: Providers });

    const loginText = screen.getByText(currentMessages.login.toUpperCase());
    const contactText = screen.getByText(currentMessages.contact.toUpperCase());

    expect(loginText).toBeInTheDocument();
    expect(contactText).toBeInTheDocument();
  });
});
