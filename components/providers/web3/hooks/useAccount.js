import { useState, useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0xD3be89E23E32b37a2acc604fC390399d9a1Ce7ce": true,
};

export const handler = (web3, provider) => () => {
  // const [account, setAccount] = useState(null);

  // useEffect(() => {
  //   const getAccount = async () => {
  //     const accounts = await web3.eth.getAccounts();
  //     setAccount(accounts[0]);
  //   };

  //   web3 && getAccount();
  // }, [web3]);

  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  console.log(adminAddresses[data]);

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    account: data,
    isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest,
  };
};
