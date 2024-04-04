import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IntlProvider } from "react-intl";
import { messages } from "../main";
import MenuComponent from "../components/Menu";

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

const mockMenu = {
  id: 1,
  name: "Test Menu",
  type: "Food",
  collapse: 0,
  sections: [
    {
      id: 101,
      name: "Drinks",
      description: "A variety of drinks",
      position: 1,
      visible: 1,
      images: [{ id: 33, image: "/images/drink1.jpg" }],
      items: [],
    },
    {
      id: 102,
      name: "Main Courses",
      description: "Delicious main courses",
      position: 2,
      visible: 1,
      images: [{ id: 77, image: "/images/main1.jpg" }],
      items: [],
    },
  ],
};

describe("MenuComponent", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  test("displays loading state", () => {
    render(<MenuComponent menu={null} status="loading" />, {
      wrapper: Providers,
    });
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test("displays error message", () => {
    render(<MenuComponent menu={null} status="failed" />, {
      wrapper: Providers,
    });
    expect(screen.getByText(/Error loading the menu./i)).toBeInTheDocument();
  });

  test("renders menu items when data is successfully loaded", () => {
    render(<MenuComponent menu={mockMenu} status="succeeded" />, {
      wrapper: Providers,
    });

    expect(screen.getByText(/Drinks/i)).toBeInTheDocument();
    expect(screen.getByText(/Main Courses/i)).toBeInTheDocument();

    expect(screen.getByAltText(/33/i)).toHaveAttribute(
      "src",
      "/images/drink1.jpg"
    );
    expect(screen.getByAltText(/77/i)).toHaveAttribute(
      "src",
      "/images/main1.jpg"
    );
  });
});
