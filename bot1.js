const Web3 = require('web3');

const web3 = new Web3('wss://mainnet.infura.io/ws/v3/16c2ae498f76463daf00e5a8c61f53c9');
const TelegramBot = require("node-telegram-bot-api");
const OKXADDR = '0x6cC5F688a315f3dC28A7781717a9A798a59fDA7b';
const Bitfinex = '0x77134cbC06cB00b66F4c7e623D5fdBF6777635EC';
const BOT_TOKEN = '6380901957:AAH9MwW4odTi3SwUZmeCn-JzwfFXXr5oh4Q';
const BananaGunRouter = '0xdB5889E35e379Ef0498aaE126fc2CCE1fbD23216'; // Replace with the actual token contract address
const mastroRouter = '0x80a64c6D7f12C47B7c66c5B4E20E72bc1FCd5d9e'; // Replace with the actual token contract address
const Binance15 = '0xC955D938000ae3Aef99d80b39617c460765D718B'

const bot = new TelegramBot(BOT_TOKEN, {
    polling: true,
  });
bot.onText(/\/start/, async function (msg) {
    bot.sendMessage(msg.chat.id, `Welcome ${msg.chat.first_name}`);
    web3.eth.subscribe('logs',{
        // address:"0x80a64c6D7f12C47B7c66c5B4E20E72bc1FCd5d9e"
    }).on('data', async blockHeader => {
       console.log(blockHeader,'blockHeader');
      
    });
    async function getTransactionReceipt(tx) {
        return await web3.eth.getTransactionReceipt(tx);
    }
})

  
// let options = {
//   address: BananaGunRouter,
// //   topics: [
// //     // web3.utils.sha3('Transfer(address,address,uint256)'),
// //     null,
// //     // [web3.eth.abi.encodeParameter('address', OKXADDR), web3.eth.abi.encodeParameter('address', Bitfinex)]

// //   ]
// };




// const abi = require('./abi.json')

// let subscription = web3.eth.subscribe('logs', options);



// bot.onText(/\/start/, async function (msg) {
//   bot.sendMessage(msg.chat.id, `Welcome ${msg.chat.first_name}`);
//   async function collectData(contract) {
//     const [decimals, symbol] = await Promise.all([
//       contract.methods.decimals().call(),
//       contract.methods.symbol().call()
//     ]);
//     return { decimals, symbol };
//   }

//   subscription.on('data', event => {
//     if (event.topics.length == 3) {
//       let transaction = web3.eth.abi.decodeLog([{
//         type: 'address',
//         name: 'from',
//         indexed: true
//       },

//       {
//         type: 'address',
//         name: 'to',
//         indexed: true
//       }, {
//         type: 'uint256',
//         name: 'value',
//         indexed: false
//       }],
//         event.data);
//       const contract = new web3.eth.Contract(abi, BananaGunRouter)
//       collectData(contract).then(contractData => {
//         console.log(transaction, 'transaction');
//         const unit = Object.keys(web3.utils.unitMap).find(key => web3.utils.unitMap[key] === web3.utils.toBN(10).pow(web3.utils.toBN(contractData.decimals)).toString());[[]]
//         const alertMsg = `Transfer of ${web3.utils.fromWei(transaction.value, unit)} ${contractData.symbol} from ${transaction.from} to ${transaction.to}`;
//         bot.sendMessage(msg.chat.id, `${alertMsg}`);
//         // if (transaction.to == Bitfinex || transaction.to == OKXADDR) {
//         //   console.log(transaction, 'transaction');
//         //   const unit = Object.keys(web3.utils.unitMap).find(key => web3.utils.unitMap[key] === web3.utils.toBN(10).pow(web3.utils.toBN(contractData.decimals)).toString());
//         //   const realValue = web3.utils.fromWei(transaction.value, unit);
//         //   const alertMsg = `Transfer of ${web3.utils.fromWei(transaction.value, unit)} ${contractData.symbol} from ${transaction.from} to ${transaction.to}`;
//         //   if (realValue >= 3) {
//         //     bot.sendMessage(msg.chat.id, `${alertMsg}`);
//         //   }
//         // }


//       })
//     }
//   });

//   subscription.on('error', err => { throw err });
//   subscription.on('connected', nr => console.log('Subscription on ERC-20 started with ID %s', nr));


// });

