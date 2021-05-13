require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot blanket razor often comic grace industry slot genius'; 
let testAccounts = [
"0xad596231df6b7469daf0a739115b84f32c375c89639a8527f42d8875fe888d40",
"0xc3f4b403c4f40992d1e740d85c68c5f07ba9e5095a647eb9a5366f9ff41d146c",
"0xa78bdb57923160885757d6c7265a1a25ade6ba452cc11e12ef8db35ebc328b11",
"0x1d98e0a50813aca421bfeb06e66659b63b8ed7f9d8f150f6333fdad1497413c0",
"0x91a026b51d27341a3de4a273e7be30630e60c25f033df008d44d93eb63d9eaf1",
"0x02b5b6a352237277f4313b429b8b2e3b3cc6497b1a09b4508a5248aa80e0c450",
"0x5f2b544f7c70f493bde3ea50ce9ba2175a7d7a35a00d9f4bb5d923589c664cf3",
"0xe19f63e711079c1eb7eea6ecf2dfd37360bb6e28d9169444ef216c79670e5df9",
"0x6955d4b579c12df95b05a7c27bcb2bf77ace884358bd08bfea9d7bed5afcc3ea",
"0x8a587b68b11c9e35c2919f985381ca9b251ab1d5cc0ff5dc3ab1116a695f42bd"
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
            version: '^0.5.11'
        }
    }
};
