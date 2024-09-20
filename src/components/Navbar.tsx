import { RiCloseFill, RiMenuFill } from "@remixicon/react";
import Button from "./Button";
import Logo from "./icons/logo";
import * as Dialog from "@radix-ui/react-dialog";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

function Navbar() {
  return (
    <header className="flex bg-transparent justify-between lg:justify-start w-full items-center pt-6 px-4 h-fit">
      <div className="flex">
        <Logo />
      </div>
      <nav className="hidden lg:flex flex-grow lg:ml-24 justify-between ">
        <ul className="flex gap-2 justify-start">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Button href={href} variant="link" className="justify-start p-3">
                {label}
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <Button variant="secondary" href="/learn-more">
            Learn More
          </Button>
          <Button variant="primary" href="/pricing">
            See pricing
          </Button>
        </div>
      </nav>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button className="lg:hidden" variant="icon">
            <RiMenuFill aria-label="Open Navigation" className="size-5" />
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-neutral-950/50 fixed inset-0 opacity-0 animate-appear" />
          <Dialog.Content className="bg-white p-4 pt-6 min-h-svh top-0 left-[-100%] animate-enter w-[100vw] fixed flex flex-col gap-6">
            <div className="flex justify-between">
              <Dialog.Title>
                <Logo />
              </Dialog.Title>
              <Dialog.Close>
                <Button variant="icon">
                  <RiCloseFill aria-hidden={true} className="size-5" />
                </Button>
              </Dialog.Close>
            </div>
            <div className="flex flex-col gap-2 flex-grow justify-start">
              <Button href="#" variant="link" className="justify-start p-3">
                Home
              </Button>
              <Button href="#" variant="link" className="justify-start p-3">
                Features
              </Button>
              <Button href="#" variant="link" className="justify-start p-3">
                Pricing
              </Button>
              <Button href="#" variant="link" className="justify-start p-3">
                About
              </Button>
              <Button href="#" variant="link" className="justify-start p-3">
                Contact
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <Button variant="secondary" href="/learn-more">
                Learn More
              </Button>
              <Button variant="primary">Try it out</Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}

export default Navbar;
