import transfer from "./transfer";

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
    let transaction = ""
    await transfer({
      targetAddress: chatres.Parameters.to_address,
      number: chatres.Parameters.value,
      token: TOKENMAP[chatres.Parameters.asset],
      onFail(reason) {
        console.log(reason)
      }
    })
    return transaction
  }
}