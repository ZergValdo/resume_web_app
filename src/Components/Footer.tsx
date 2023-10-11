import { Footer } from "flowbite-react";
import { BsGithub } from "react-icons/bs";

export default function FooterPage() {
  return (
    <Footer container className="bg-cyan-950 fixed bottom-0 w-full">
      <div className="w-full">
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Sergio Valdovinos"
            href="#"
            year={2023}
            className="text-white"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://github.com/ZergValdo"
              icon={BsGithub}
              className=" mt-2  h-5 text-white hover:text-sky-600"
            />
            <a
              className="text-white  hover:text-sky-600"
              aria-label="Visit TrendyMinds LinkedIn"
              href="https://www.linkedin.com/in/sergio-valdovinos-10772a268/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-5"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
}
