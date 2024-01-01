import { HashRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts'
import { Grocha, LinkMobile, LinkWeb, MobileShop, MuseumInformationSystem, Portfolio, ProblemetNprishtine } from '../pages'

const Routing = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/' element={<Portfolio />} />
          <Route path='/grocha' element={<Grocha />} />
          <Route path='/link-mobile' element={<LinkMobile />} />
          <Route path='/link-web' element={<LinkWeb />} />
          <Route path='/museum-information-system' element={<MuseumInformationSystem />} />
          <Route path='/mobile-shop' element={<MobileShop />} />
          <Route path='/problemet-nprishtine' element={<ProblemetNprishtine />} />
          <Route path='/*' element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default Routing