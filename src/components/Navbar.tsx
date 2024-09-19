import { RiCloseFill, RiMenuFill } from "@remixicon/react";
import Button from "./Button";
import Logo from "./icons/logo";
import * as Dialog from "@radix-ui/react-dialog";

function Navbar() {
  return (
    <header className="flex justify-between w-screen items-center pt-9 px-4">
      <div className="flex">
        <Logo />
      </div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button variant="icon">
            <RiMenuFill className="size-5" />
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-neutral-950/50 fixed inset-0 opacity-0 animate-appear" />
          <Dialog.Content className="bg-white p-4 pt-9 min-h-svh top-0 left-[-100%] animate-enter w-[100vw] fixed flex flex-col gap-6">
            <div className="flex justify-between">
              <Dialog.Title>
                <Logo />
              </Dialog.Title>
              <Dialog.Close>
                <Button variant="icon">
                  <RiCloseFill className="size-5" />
                </Button>
              </Dialog.Close>
            </div>
            <div className="flex flex-col gap-2 flex-grow justify-start">
              <Button variant="link" className="justify-start p-3">
                Home
              </Button>
              <Button variant="link" className="justify-start p-3">
                Features
              </Button>
              <Button variant="link" className="justify-start p-3">
                Pricing
              </Button>
              <Button variant="link" className="justify-start p-3">
                About
              </Button>
              <Button variant="link" className="justify-start p-3">
                Contact
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <Button variant="secondary">Learn More</Button>
              <Button variant="primary">Try it out</Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}

export default Navbar;
