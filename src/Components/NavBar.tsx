import { Navbar } from "flowbite-react";

export default function NavbarWithCTAButton() {
  return (
    <Navbar className="p-4 rounded-none bg-cyan-950" fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap font-semibold text-white text-3xl ml-24">
          Sergio
        </span>
      </Navbar.Brand>
      <Navbar.Collapse className="mr-14">
        <Navbar.Link className="text-white hover:text-black">
          <p className="text-white text-xl hover:text-sky-600 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">Home</p>
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white  hover:text-sky-600 ">
        <p className="text-white text-xl hover:text-sky-600 hover:-translate-y-1 hover:scale-110 duration-300">About</p>
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white ">
        <p className="text-white text-xl hover:text-sky-600 hover:-translate-y-1 hover:scale-110 duration-300">Pojects</p>
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white ">
        <p className="text-white text-xl hover:text-sky-600 hover:-translate-y-1 hover:scale-110 duration-300">Contact</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
