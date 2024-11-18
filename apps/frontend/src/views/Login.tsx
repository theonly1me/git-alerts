import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { authenticate } from "@/lib/auth";
import GitAlertsCat from '../assets/git-alerts-cat.webp';

export function Login() {
  const handleLogin = () => {
    authenticate();
  } 

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-full text-neutral-50">
      <img src={GitAlertsCat} alt="The git alerts cat holding bells" className="max-w-52"/>
      <h1 className="text-3xl">Welcome to git alerts! 🔔</h1>
      <p className="text-lg max-w-64 text-center">Sign in to get started.</p>
      <Button variant="secondary" title="Sign In" className="text-neutral-950" onClick={handleLogin}>Sign In with GitHub <GitHubIcon/></Button>
    </div> 
  );
}
