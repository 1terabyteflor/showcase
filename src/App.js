import { Download, Features, SectionWrapper } from './components'
import assets from './assets'
import styles from './styles/Globals';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of nifty NFTs.
        Start selling and growing"
        description="Buy, store, collect NFTs, exchange and earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"/>
      <SectionWrapper
        title="Smart user interface marketplace"
        description="Experience a buttery UI of ProNef Marketplace. Smooth constant colors of a fluent UI Design."
        mockupImg={assets.homeCards}
        reverse />
      <Features/>
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens: the first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner='banner02' />
        <Download/>
        <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
          <p className={`${styles.pText} ${styles.whiteText}`}>Made by love by Plantasia</p>
        </div>
    </>
  );
}

export default App;
