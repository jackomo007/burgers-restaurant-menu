import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IntlProvider } from "react-intl";
import { messages } from "../main";
import MenuCard from "../components/Menu";

const currentMessages = messages.en;

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <IntlProvider locale="es" messages={currentMessages}>
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
      images: [{ id: 1, image: "/images/drink1.jpg" }],
      items: [],
    },
    {
      id: 102,
      name: "Main Courses",
      description: "Delicious main courses",
      position: 2,
      visible: 1,
      images: [{ id: 2, image: "/images/main1.jpg" }],
      items: [],
    },
    {
      id: 103,
      name: "Salad",
      description: "Fresh",
      position: 3,
      visible: 1,
      price: 5,
      images: [{ id: 3, image: "/salad.jpg" }],
      items: [],
    },
  ],
};

describe("MenuCard", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  test("displays loading state", () => {
    render(<MenuCard menu={null} status="loading" />, {
      wrapper: Providers,
    });
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test("displays error message", () => {
    render(<MenuCard menu={null} status="failed" />, {
      wrapper: Providers,
    });
    expect(screen.getByText(/Error loading the menu./i)).toBeInTheDocument();
  });

  test("renders menu items when data is successfully loaded", () => {
    render(<MenuCard menu={mockMenu} status="succeeded" />, {
      wrapper: Providers,
    });

    expect(screen.getByText(/Drinks/i)).toBeInTheDocument();
    expect(screen.getByText(/Main Courses/i)).toBeInTheDocument();

    expect(screen.getByAltText(/1/i)).toHaveAttribute(
      "src",
      "/images/drink1.jpg"
    );
    expect(screen.getByAltText(/2/i)).toHaveAttribute(
      "src",
      "/images/main1.jpg"
    );
  });

  test("renders menu items when status is succeeded", () => {
    render(<MenuCard menu={mockMenu} status="succeeded" />);
    expect(screen.getByText("Salad")).toBeInTheDocument();
  });
});
