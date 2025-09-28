import './App.css'
import CardNav from './CardNav'
import logo from '/logo.png';
import TiltedCard from './TiltedCard';
import TextType from './TextType';
 


function App() {

    const items = [
    {
      label: "About",
      bgColor: "#001e1d",
      textColor: "#fff",
      links: [
        { label: "Company", href: "/company", ariaLabel: "About Company" },
        { label: "Careers", href: "/careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#00242a",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "/projects/featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "/projects/case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#004643", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:info@example.com", ariaLabel: "Email us" },
        { label: "Twitter", href: "https://twitter.com/", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "https://linkedin.com/", ariaLabel: "LinkedIn" }
      ]
    }
  ];


  return (
    <>
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#abd1c6"
      menuColor="#004643"
      buttonBgColor="#f9bc60"
      buttonTextColor="#001e1d"
      ease="power3.out"
    />
    <header>
      <div className='title-box'>
        <h1>Weasel Project</h1>
        <TextType 
          text={["Authentic Destinations.", "Affordable destinations.", "In every location."]}
          typingSpeed={75}
          pauseDuration={2000}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
      <div className='head-elements'>
        <span className='f1'></span>
        <span className='f2'></span>
        <span className='f3'></span>
      </div>
    </header>
    <main>
      <section className='main-section destinos-section'>
        <h1>Welcome to the Weasel Project</h1>
        <div className='destinos-container'>
          <div className='destino-card-desc'>
            <h2>Discover Authentic Destinations</h2>
            <p className='p-desc'>Explore hidden gems and unique places around the world with the Weasel Project. Our curated selection of destinations offers an authentic experience away from the typical tourist paths. Whether you're seeking adventure, culture, or tranquility, we have something special for every traveler.</p>
          </div>
          <div className='destino-card'>
            <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1758796187056-c612aa28d19a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="History and culture"
                captionText="History and culture"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={0.96}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    History and culture.
                  </p>
                }
            />
            <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1756727526787-b113e5c6d865?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="nature and tranquility"
                captionText="nature and tranquility"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={0.96}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Nature and tranquility.
                  </p>
                }
            />

          </div>

        </div>
        <div className='destino-card destino-card2'>
            <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1758754169722-620d36fcb76b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="Oriental culture"
                captionText="Oriental culture"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={0.96}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Oriental culture.
                  </p>
                }
            />
            <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1755719985500-b6049b2ecb1f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="calm and serenity"
                captionText="calm and serenity"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={0.96}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Calm and serenity.
                  </p>
                }
            />
            <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1731370963892-32c7347cd2d8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="city life"
                captionText="city life"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={0.96}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    City life.
                  </p>
                }
            />
            <TiltedCard
                imageSrc="https://images.unsplash.com/photo-1741851374460-aae369fb97ac?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                altText="social life"
                captionText="social life"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={0.96}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Social life.
                  </p>
                }
            />
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 Weasel Project. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
