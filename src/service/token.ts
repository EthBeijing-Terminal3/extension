import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";


const chain = EvmChain.ETHEREUM;

export async function getTOKEN(accountAddress:string) {
  let data: any;
  await Moralis.start({
    apiKey: "9qMwq1JNYaykHkZ",
  });
  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    address: accountAddress,
    chain,
  });
  return data;
}