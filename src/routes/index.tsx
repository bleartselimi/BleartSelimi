import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts'
import { BlogOne, Blogs, Chatly, LinkMobile, LinkWeb, MobileShop, MuseumInformationSystem, NotFound, Portfolio, ProblemetNprishtine } from '../pages'
import { blogLinks } from '../pages/Blog/BlogLinks'


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
        <Route path='/blogs' element={<Blogs />}>
          <Route path={blogLinks.blogOne} element={<BlogOne />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Routing