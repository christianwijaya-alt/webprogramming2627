import './App.css'

import { Route, Routes } from 'react-router-dom'

import TransaksiItem from './component/TransaksiItem'
import Badge from './component/Badge'
import CardStatusDemo from './component/CardStatusDemo'
import HeaderBanner from './component/HeaderBanner'
import TransactionManager from './component/TransactionManager'
import KartuRingkasan from './component/KartuRingkasan'
import WalletSummary from './component/WalletSummary'
import LayoutGrid from './component/LayoutGrid'
import AppNavigation from './component/AppNavigation'

import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <AppNavigation/>
      <Routes>
        <Route path='/transaksi' element={ <TransaksiItem />} />
        <Route path='/badge' element={ <Badge />} />
        <Route path='/carddtatusdemo' element={ <CardStatusDemo /> } />
        <Route path='/headerbanner' element={ <HeaderBanner />} />
        <Route path='/transactionmanager' element={ <TransactionManager />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/karturingkasan' element={ <KartuRingkasan />} />
        <Route path='/LayoutGrid' element={ <LayoutGrid/>  }/>
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/walletsummary' element={ <WalletSummary />} />
      </Routes>
    </>
  );
}
export default App;
