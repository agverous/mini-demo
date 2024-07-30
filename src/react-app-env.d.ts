/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';

    REACT_APP_CHAIN_ID: number;

    REACT_APP_SALE_CONTRACT: string;
    REACT_APP_BIGSHOT_CONTRACT: string;
    REACT_APP_GANGSTER_CONTRACT: string;

    REACT_APP_SALE_TYPE: string;
    REACT_APP_SALE_START_TIME: string;
    REACT_APP_SALE_END_TIME: string;

    REACT_APP_BIGSHOT_PRICE: string;
    REACT_APP_GANGSTER_PRICE: string;
  }
}

interface Window {
  ethereum: any;
}
