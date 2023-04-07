import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";


const chain = EvmChain.ETHEREUM;

export async function getTOKEN(accountAddress:string) {
  let data: any;
  await Moralis.start({
    apiKey: "BrtEYPDUJMHnl6ckDVi8895MUTVfW0RUBo6nUh4UJITYWXl9ntS1mpmFSn0s9SmA",
  });
  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    address: accountAddress,
    chain,
  }).then((res)=>{data = res});
  return data?.jsonResponse;
}