import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const NavbarSection = () => {
  const user = false;
  return (
    <>
      <Navbar fluid rounded className="max-w-screen-xl mx-auto">
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            alt="Traveler Logo"
            className="mr-2 sm:h-9"
            src="/the-traveler-logo.png"
          />
          <span className="self-center whitespace-nowrap text-2xl sm:xl font-semibold dark:text-white">
            The Traveler
          </span>
        </Navbar.Brand>
        {user ? (
          <>
            <div className="flex md:order-2">
              <Dropdown
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.209329912.1680195530&semt=ais"
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                  </span>
                </Dropdown.Header>
                <li>Dashboard</li>
                <li>Settings</li>
                <li>Earnings</li>
                <Dropdown.Divider />
                <li>Sign out</li>
              </Dropdown>
              <Navbar.Toggle />
            </div>
          </>
        ) : (
          <div className="flex md:order-2">
            <Link to="/login">
              <button className="text-lg text-gray-700 font-medium bg-green-300 px-4 py-1 rounded-lg">
                Login
              </button>
            </Link>
          </div>
        )}

        <Navbar.Collapse>
          <Navbar.Link className="text-lg" active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="#">
            About
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="#">
            Services
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="#">
            Pricing
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="#">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarSection;
