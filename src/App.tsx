import { RiShiningLine } from "@remixicon/react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="min-h-screen grid grid-rows-[auto_1fr_auto] max-w-screen-xl mx-auto">
      <div
        aria-hidden={true}
        className="fixed inset-0 bg-gradient-to-br from-gray-50 to-[#d2d6db] -z-10"
      />
      <Navbar />
      <main />
      <footer
        className="min-h-10 bg-blue flex flex-col md:flex-row gap-1 text-neutral-500"
        data-gfe-screenshot-exclude="true"
      >
        <p>
          <span className="md:text-base text-sm">A challenge by</span>{" "}
          <Button
            className="inline-flex"
            variant="link"
            href="https://www.greatfrontend.com/projects?ref=challenges"
            target="_blank"
          >
            GreatFrontEnd Projects.
          </Button>
        </p>
        <p>
          <span className="md:text-base text-sm">Built by</span>{" "}
          <Button
            variant="link"
            className="inline-flex"
            href="https://www.greatfrontend.com/projects/u/AndresCaSa"
            target="_blank"
          >
            Andres Castellanos.
          </Button>{" "}
          <span className="md:text-base text-sm">
            With passion <RiShiningLine className="size-3 inline-block" />{" "}
          </span>
        </p>
      </footer>
    </main>
  );
}

export default App;
