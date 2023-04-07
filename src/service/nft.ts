import { ErcType, EvmChain, NftscanEvm } from "nftscan-api";
const config = {
  apiKey: "2iKpi9wg0s8EMxejGUMb7Wwr", // Replace with your NFTScan API key.
  chain: EvmChain.ETH, // Replace with your chain.
};

const evm = new NftscanEvm(config);

export async function getNFT(accountAddress:string) {
  let data: any;
    await evm.asset
    .getAssetsByAccount(accountAddress, {
      erc_type: ErcType.ERC_721,
    })
    .then((res) => {data = res});
  return data;
}