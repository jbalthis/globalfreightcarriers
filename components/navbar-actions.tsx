"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/auth/login")}
        className="flex items-center rounded-full bg-slate-700 px-4 py-2"
      >
        <UserCircle size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
            Log In
        </span>
      </Button>
      <Link
        href="/auth"
        className="flex items-center"
      >
        <span className="ml-2 text-xs font-medium text-slate-800">
            Or, Sign Up
        </span>
        </Link>
    </div>
  );
};

export default NavbarActions;
