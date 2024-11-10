import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { authenticate } from "@/lib/auth";

export function Login() {
  const handleLogin = () => {
    authenticate();
  } 

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-full text-neutral-50">
      <h1 className="text-3xl">Welcome to git alerts! 🔔</h1>
      <p className="text-xl">Sign in to get started.</p>
      <Button variant="secondary" title="Sign In" className="text-neutral-950" onClick={handleLogin}>Sign In with GitHub <GitHubIcon/></Button>
    </div> 
  );
}
