import React from "react";
import Link from "next/link";
import { useWeb3 } from "@components/providers";
import { Button } from "@components/ui/common";
import { useAccount } from "@components/hooks/web3/useAccount";
import { useRouter } from "next/router";

const Navbar = () => {
  const { connect, isLoading, isWeb3Loaded } = useWeb3();
  const { account, isAdmin } = useAccount();
  const { pathname } = useRouter();
  return (
    <section>
      {pathname}
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Product
                </a>
              </Link>
              <Link href="/marketplace">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </Link>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Blogs
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Wishlist
                </a>
              </Link>

              {isLoading ? (
                <Button disabled={true} onClick={connect}>
                  Loading...
                </Button>
              ) : isWeb3Loaded ? (
                account ? (
                  <Button hoverable={false} className="cursor-default">
                    Hi There {isAdmin && "Admin"}
                  </Button>
                ) : (
                  <Button onClick={connect}>Connect</Button>
                )
              ) : (
                <Button
                  onClick={() =>
                    window.open("https://metamask.io/download.html", "_blank")
                  }
                >
                  Install Metamask
                </Button>
              )}
            </div>
          </div>
        </nav>
      </div>
      {account && !pathname.includes("/marketplace") && (
        <div className="flex justify-end  pt-1 sm:px-6 lg:px-8">
          <div className="text-white bg-indigo-600 rounded-md p-2">
            {account}
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
