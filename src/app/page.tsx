'use client'

import styles from "./Home.module.css"
import Link from "next/link";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <>
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 1,
      }}
    >
      <main>
        Hi, I'm Piyush 👋 
      </main>

    </div>
    <Particles
      particleColors={['#478c9cff', '#ffd000ff']}
      particleCount={500}
      particleSpread={8}
      speed={0.3}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>
    </>
  );
}


// 'use client'

// import styles from "./Home.module.css"
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//     <header className={styles.navbar}>
//       <div className={styles.navbarContainer}>
//         <div className={styles.navbarCentre}>
//           <Link href="/about" className={styles.navLink}>About</Link>
//           <Link href="/projects" className={styles.navLink}>Projects</Link>
//           <Link href="/contact" className={styles.navLink}>Contact</Link>
//         </div>
//       </div>
      
//     </header>

//     <main className={styles.heroContainer}>
//       <div className={styles.contentContainer}>


//         <h2 className={styles.subtitle}>
          
//         </h2>

//         <div className={styles.description}>
          
//         </div>
//       </div>

//       <div className={styles.contactContainer}>
//         <div>

//         </div>
//       </div>

//     </main>

//     <section className={styles.aboutSection}>
//       <div className={styles.sectionContainer}>
//         <h2 className={styles.sectionTitle}>
//           About Me
//         </h2>

//         <p className={styles.aboutText}>
//           Hey! I'm Piyush Jha, a 2nd year Software Engineering (Honours) Student at the University of New South Wales.
//           I love to tackle challenging problems and creating impactful solutions.

//           Here are a few programming languages and technologies I'm familiar with: 
//         </p>
//         <ul className={styles.skillsList}>
//           <li>JavaScript/TypeScript</li>
//           <li>Node.js</li>
//           <li>Next.js</li>
//           <li>PostgreSQL</li>
//           <li>Prisma</li>
//           <li>C</li>
//           <li>Git</li>
//         </ul>

//         <p className={styles.aboutText}>
//         Outside of tech, I enjoy listening to music and playing the digital piano. Here are some of my
//         favourite music albums:

//         <div className={styles.musicAlbums}>

//         </div>

//         I also enjoy all things related to fitness like running and weightlifting.
//         </p>
//       </div>
//     </section>

//     <section className={styles.projectSection}>
//       <div className={styles.sectionContainer}>
//         <h2 className={styles.sectionTitle}>
//           Projects
//         </h2>

//         <div className={styles.projectsGrid}>
//           <div className={styles.projectCard}>
//             <div className={styles.projectContent}>
//               <h3 className={styles.projectTitle}>StudyIntel</h3>
//               <div className={styles.description}>
//                 <p>Project info here</p>
//               </div>

//               <ul className={styles.projectTechStack}>
//                 <li className={styles.projectTech}>TypeScript</li>
//                 <li className={styles.projectTech}>Node.js</li>
//                 <li className={styles.projectTech}>Express.js</li>
//                 <li className={styles.projectTech}>Next.js</li>
//                 <li className={styles.projectTech}>PostgreSQL</li>
//                 <li className={styles.projectTech}>Prisma</li>
//               </ul>
//               <div className={styles.projectLinks}>
//                 <a href="https://studyintel.app" target="_blank">Link</a>
//               </div>
//             </div>
//           </div>

//           <div className={styles.projectCard}>
//             <div className={styles.projectContent}>
//               <h3 className={styles.projectTitle}>SQLite Replica</h3>
//               <div className={styles.description}>
//                 <p>Project info here</p>
//               </div>

//               <ul className={styles.projectTechStack}>
//                 <li className={styles.projectTech}>C</li>
//               </ul>
//               <div className={styles.projectLinks}>
//                 <a href="https://google.com" target="_blank">Gooe</a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>

//     <section className={styles.dreamsSection}>
//       <div className={styles.sectionContainer}>
//         <h2 className={styles.sectionTitle}>
//           My Dreams
//         </h2>

//         <p>Since the theme of the website is Dreams, I thought I would quickly mention my own dreams and aspirations for the future.
//           I want to become a Backend Software Engineer with a focus on system design. Eventually, I wish to 
//           build and scale a tech startup, focusing on solving a real problem and making a positive impact on the world. 
//           Another dream that I have is to be a trainee of DevSoc's training program ;)
//         </p>
//       </div>
//     </section>

//     <section className={styles.contactSection}>
//       <div className={styles.sectionContainer}>
//         <h2 className={styles.sectionTitle}>
//           Contact Me
//         </h2>
//       </div>
//     </section>
//     </>
//   );
// }

