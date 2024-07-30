import * as React from 'react';
import { BSC, DAppProvider } from '@usedapp/core';
import {  Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import './App.less';
import { useEffect, useState } from 'react';
import { createWeb3Name } from '@web3-name-sdk/core';


function App() {
  const queryClient = new QueryClient();
  const [name, setName] = useState<undefined | string>(undefined);

  useEffect(() => {
    const interval = 5000;
    let intervalId: any;

    function refreshRemaining() {
      const web3name = createWeb3Name();
      web3name
        .getDomainName({
          address: '0x6D4fC99D276C84E014535e3EF80837cB13ac5d26',
          queryChainIdList: [56],
        })
        .then((name) => {
          console.log('web3name.getDomainName', name);
          if (name && name.length > 0) {
            setName(name);
          }
        });
    }
    refreshRemaining();
    intervalId = setInterval(refreshRemaining, interval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <DAppProvider
        config={{
          readOnlyChainId: BSC.chainId,
          readOnlyUrls: {
            [BSC.chainId]: 'https://bsc-dataseed1.binance.org/',
          },
        }}
      >
        <div className="App">
          <main className="min-h-[calc(100vh-18rem-64px)] md:min-h-[calc(100vh-20rem-64px)] ">
            <div className="mt-[5rem] text-xl">space id: {name}</div>
            <Routes></Routes>
            <ToastContainer />
          </main>
        </div>
      </DAppProvider>
    </QueryClientProvider>
  );
}

export default App;
