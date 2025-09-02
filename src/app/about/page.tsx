'use client'

import styles from "./About.module.css"
import Link from "next/link";
import Particles from "@/components/Particles";
import TiltedCard from "@/components/TiltedCard";

export default function AboutPage() {
  return (
    <>
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>

      <header className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navCentre}>
            <Link href="/home" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/projects" className={styles.navLink}>Projects</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </div>
        </div>
      </header>
      
      <div className={styles.sectionContainer}>        
        <h2 className={styles.sectionTitle}>About Me</h2>

        <p className={styles.description}>
          Hey! My name is Piyush Jha, and I'm a second-year student at the University
          of New South Wales. I love to tackle challenging problems and create impactful
          solutions. I'm passionate about software development, particularly in web technologies
          and system design. Here are a few programming languages and skills I'm familiar with:
        </p>

        <p>JavaScript/TypeScript
          Node.js
          Next.js
          PostgreSQL
          Prisma
          C
          Git</p>
          
          
        When I'm not coding (rotting), you can find me at the gym, hanging out with 
        my friends, listening to my curated music playlists or playing the digital piano.
        Some of my favourite music albums are:

        <div className={styles.albumCovers}>

        </div>


        <div className={styles.photoPics}>
        

        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d6adfbd3f091d6f2b9af6507"
          altText=""
          captionText=""
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="150px"
          imageWidth="150px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p style={{color: 'black'}} className="tilted-card-demo-text px-3 py-1 text-black font-bold">
              What A Time To Be Alive - Drake, Future
            </p>
          }
          />

        <TiltedCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRup8qV6TqHYDsD2OWtotGk6uJBF-H4Xnq4Q&s"
          altText=""
          captionText=""
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="150px"
          imageWidth="150px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text px-4 py-1 text-black font-bold">
              ASTROWORLD - Travis Scott
            </p>
          }
          />
  
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b2736cfa297b0178fd91dca5c4f1"
          altText=""
          captionText=""
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="150px"
          imageWidth="150px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p style={{color: 'white', fontSize: '0.8rem'}} className="tilted-card-demo-text px-1 py-1 text-white font-bold">
              PARTYNEXTDOOR TWO - PARTYNEXTDOOR
            </p>
          }
          />

          <TiltedCard
          imageSrc="https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Graduation_%28album%29.jpg/250px-Graduation_%28album%29.jpg"
          altText=""
          captionText=""
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="150px"
          imageWidth="150px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
            <p style={{color: 'white', fontSize: '0.8rem'}} className="tilted-card-demo-text px-1 py-1 text-white font-bold">
              Graduation - Kanye West
            </p>
          }
          />
        </div>

          
          I also enjoy photography. Here are some of my favourite pictures that I have taken:

        
      </div>

      <Particles
        particleColors={['#478c9cff', '#ffd000ff']}
        particleCount={500}
        particleSpread={8}
        speed={0.3}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />

    </div>
    </>
  );
}
