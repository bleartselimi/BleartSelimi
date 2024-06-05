import {  Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts'
import { Chatly, LinkMobile, LinkWeb, MobileShop, MuseumInformationSystem, NotFound, Portfolio, ProblemetNprishtine } from '../pages'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path='/' element={<Portfolio />} />
        <Route path='/chatly' element={<Chatly />} />
        <Route path='/link-mobile' element={<LinkMobile />} />
        <Route path='/link-web' element={<LinkWeb />} />
        <Route path='/museum-information-system' element={<MuseumInformationSystem />} />
        <Route path='/mobile-shop' element={<MobileShop />} />
        <Route path='/problemet-nprishtine' element={<ProblemetNprishtine />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routing