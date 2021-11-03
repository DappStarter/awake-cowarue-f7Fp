require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stomach response talk comic install civil army gate'; 
let testAccounts = [
"0x467a72dc01c26276c9c3e08d134925358d913ffc1b1db357b92ae2314889b234",
"0x5044d6da997779103322a810e370065a8abe61135b50a4a8cb5b3573fbe847a6",
"0x9681517d4991c91a793ad8baf91a94bceee10c0dba52f63c789c751cf1078a43",
"0xde3946d0676643c73799f08634e906092d3ce0dbece6308688d17c52af4ef14c",
"0x27521d7714866352fa874720e98c7918ab6324c4a0d216b0bda68d9d61bf08ca",
"0xf49809576091b23f09f3f87345fa3d1e27fa8b4d03d98023ffe1ee559087e995",
"0x4fef24c1f9663fca423aa9acbc2af4e72eb169eb05e0b6b50c2bfa32bf1a9368",
"0xa977033cb31e5a72f01a8665f0a5ed9f205dc01be29948b25fd4773f968c6cb8",
"0xd81cb30b9d51ea51b29374cfcbcc45f829d15e1705d86e970cd15eec69c1d957",
"0x676d40b90152fb1b8a6b3141cfbf5d0a04440a94cbde4cc734990fa0523d1e3e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

