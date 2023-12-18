const url =
  'https://coingecko.p.rapidapi.com/simple/price?ids=Aave%2CBitcoin%2CCardano%2CCosmos%2CDogecoin%2CEthereum%2CFilecoin%2CGnosis%2CImmutable%2CMaker%2CMonero%2COKB%2CPolkadot%2CSolana%2CStellar%2CTRON&vs_currencies=usd'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8c1e798ae1msh891088871ea7b7bp1b01fcjsnd0688252875f',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
}

const aave = document.getElementById('aave')
const btc = document.getElementById('btc')
const cd = document.getElementById('cd')
const cms = document.getElementById('cms')
const dgc = document.getElementById('dgc')
const eth = document.getElementById('eth')
const fc = document.getElementById('fc')
const gno = document.getElementById('gno')
const imm = document.getElementById('imm')
const mkr = document.getElementById('mkr')
const mno = document.getElementById('mno')
const okb = document.getElementById('okb')
const pol = document.getElementById('pol')
const sol = document.getElementById('sol')
const slr = document.getElementById('slr')
const tron = document.getElementById('tron')

async function printValue () {
  const response = await fetch(url, options)
  const result = await response.json()
  aave.innerHTML = '$' + result.aave.usd
  btc.innerHTML = '$' + result.bitcoin.usd
  cd.innerHTML = '$' + result.cardano.usd
  cms.innerHTML = '$' + result.cosmos.usd
  dgc.innerHTML = '$' + result.dogecoin.usd
  eth.innerHTML = '$' + result.ethereum.usd
  fc.innerHTML = '$' + result.filecoin.usd
  gno.innerHTML = '$' + result.gnosis.usd
  imm.innerHTML = '$' + result.immutable.usd
  mkr.innerHTML = '$' + result.maker.usd
  mno.innerHTML = '$' + result.monero.usd
  okb.innerHTML = '$' + result.okb.usd
  pol.innerHTML = '$' + result.polkadot.usd
  sol.innerHTML = '$' + result.solana.usd
  slr.innerHTML = '$' + result.stellar.usd
  tron.innerHTML = '$' + result.tron.usd
}

const btn = document.getElementById('click')
const currencyName = document.getElementById('result')
const currencyValue = document.getElementById('showResult')

const input = document.getElementById('input')
input.addEventListener('keyup', function (event) {
  event.preventDefault()
  if (event.keyCode === 13) {
    show()
  }
})

async function searchValue () {
  let store = document.getElementById('input').value.trim().toLowerCase()
  try {
    let searchurl =
      await `https://coingecko.p.rapidapi.com/simple/price?ids=${store}&vs_currencies=usd`
    fetch(searchurl, options)
      .then(res => res.json())
      .then(json => {
        let coins = Object.getOwnPropertyNames(json)
        for (let coin of coins) {
          let coinInfo = json[`${coin}`]
          let price = coinInfo.usd
          currencyName.innerHTML =
            store.charAt(0).toUpperCase() + store.slice(1)
          currencyValue.innerHTML = '$' + price
        }
      })
  } catch (error) {
    console.error(error)
  }
}

btn.addEventListener('click', show)

async function show () {
  event.preventDefault()
  searchValue()
  const reset = await (document.getElementById('input').value = '')
}

printValue()

const menubtn = document.getElementById('menubtn')
const menu = document.getElementById('menu')
menubtn.addEventListener('click', function displayMenu () {
  if (menu.style.height === '0px') {
    menu.style.height = 'auto'
  } else {
    menu.style.height = '0px'
  }
})
