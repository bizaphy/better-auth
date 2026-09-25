"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { data: session, isPending: loading } = authClient.useSession();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-6 px-4 max-w-md mx-auto">
      <div className="text-center space-y-6">
        {session == null ? (
          <>
            <h1 className="text-3xl font-bold">Welcome to Our App!</h1>
            <Button asChild size="lg">
              <Link href="/auth/login">Sign in / Sign up</Link>
            </Button>
          </>
        ) : (
          <div>
            <h1>Logged in, welcome {session.user.name}</h1>
            <Button
              size="lg"
              variant="destructive"
              onClick={() => authClient.signOut()}
            >
              Sign out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
