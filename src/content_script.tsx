import React, { useEffect, useState } from "react";
import { SideBar } from "./component/SideBar/SideBar";
import ReactDOM from "react-dom";
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: "Q4N78Vkur-UYNK7j81VSQrcLWL0IoDIf" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Terminal3',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const Main = () => {
  return (
        <SideBar/>
  );
}

const app = document.createElement('div');
app.id = 'extension-root';
document.body.appendChild(app);

ReactDOM.render(
  <WagmiConfig client={wagmiClient}>
  <RainbowKitProvider chains={chains}><Main /> </RainbowKitProvider>
    </WagmiConfig>, app);
