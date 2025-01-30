import Hero from '../components/hero'
import LiveAuctions from '../components/liveAuctions'
import Overline1 from '../components/overline1'
import Overline2 from '../components/overline2'
import Overline3 from '../components/overline3'
import SaleOffers from '../components/saleOffers'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <LiveAuctions/>
        <Overline1/>
        <SaleOffers/>
        <Overline2/>
        <Overline3/>
    </div>
  )
}

export default HomePage
