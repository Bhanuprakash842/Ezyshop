import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { User } from "lucide-react";
// {toggleMenu}: {toggleMenu:() => void}
const AuthButtons = ({ toggleMenu }: { toggleMenu: () => void }) => {
  // const [open, setOpen] = useState(false);
  // const [loading] = useState(false);

  const session = useSession();
  return (
    <div className="flex items-center justify-center gap-2">
      {session.status == "unauthenticated" && (
        <Link href={"/auth/role"}>
          <Button
            size={"lg"}
            className={`bg-customTeal dark:bg-Green dark:text-[#fff] dark:hover:opacity-80  hover:border rounded-xl`}
            onClick={() => toggleMenu()}
          >
            Login / Signup
          </Button>
        </Link>
      )}
      {session.status == "authenticated" && (
        <>
          <Link href={`/user/${session.data.user.id}/dashboard`}>
            <Button className="rounded-full" variant={"outline"}>Dashboard</Button>
          </Link>
          <Button><User/></Button>
          <Button
            className="rounded-full"
            variant={"outline"}
            onClick={() => {
              // toggleMenu();
              signOut();
            }}
          >
            Log out
          </Button>
        </>
      )}
      {/* <AuthModal
          isOpen={open}
          onClose={() => setOpen(false)}
          loading={loading}
        /> */}
    </div>
  );
};

export default AuthButtons;
