
## Fine case
```shell
git clone https://github.com/agverous/mini-demo.git
cd mini-demo

yarn install
yarn start
```


## Error case: `TypeError: Cannot convert a BigInt value to a number`
```shell
git clone https://github.com/agverous/mini-demo.git
cd mini-demo

yarn install
yarn build

npm install -g serve
serve -s ./build
```
