import transfer from "./transfer";
import uniswap from "./uniswap";

export type ChatRes = {
  Action: string;
  Comment: string;
  Parameters: any;
}
const TOKENMAP = {
  "WETH": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  "USDT": "0xdAC17F958D2ee523a2206206994597C13D831ec7"
}
export async function judge(chatres: any) {
  let action = chatres.Action;
  if (action == "token_transfer") {
    return new Promise((resolve,reject) => {
      transfer({
        targetAddress: chatres.Parameters.To_address,
        number: chatres.Parameters.Value,
        token: TOKENMAP[chatres.Parameters.Asset],
        onFail: reject,
        onSuccess: resolve,
      })
    })
  } else 
  if (action == "token_swap") {
    return new Promise((resolve,reject) => {
      uniswap({
        number: chatres.Parameters.value,
        token: TOKENMAP[chatres.Parameters.output_asset],
        onFail: reject,
        onSuccess: resolve,
      })
    })
  }
}