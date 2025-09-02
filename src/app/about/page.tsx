"use client";

import styles from "./About.module.css";
import Link from "next/link";
import Image from "next/image";
import TiltedCard from "@/components/TiltedCard";

export default function AboutPage() {
  return (
    <>
      <div className={styles.content}>
        <header className={styles.navbar}>
          <div className={styles.navContainer}>
            <div className={styles.navCentre}>
              <Link href="/home" className={styles.navLink}>
                🏠 Home
              </Link>
              <span className={styles.divider}> | </span>
              <Link href="/about" className={styles.navLink}>
                About 💭
              </Link>
              <Link href="/projects" className={styles.navLink}>
                Projects 💡
              </Link>
              <Link href="/contact" className={styles.navLink}>
                Contact 📥
              </Link>
            </div>
          </div>
        </header>

        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>About Me 💭</h2>

          <p className={styles.intro}>
            Hey! My name is Piyush Jha and I&apos;m 19 years old. Currently,
            I&apos;m a second-year Software Engineering (Honours) student at the{" "}
            <a
              style={{ fontStyle: "italic", textDecoration: "underline" }}
              href="https://unsw.edu.au"
              target="blank"
            >
              University of New South Wales
            </a>
            . I love to tackle challenging technical problems and creating
            impactful solutions.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              marginTop: "1rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TiltedCard
                imageSrc="/me.png"
                altText=""
                captionText=""
                containerHeight="400px"
                containerWidth="400px"
                imageHeight="400px"
                imageWidth="400px"
                rotateAmplitude={12}
                scaleOnHover={1.0}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
              />
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "14px",
                  textAlign: "center",
                  color: "white",
                  maxWidth: "400px",
                  marginTop: "0.5rem",
                }}
              >
                Here&apos;s me with my friend (I&apos;m on the left, sorry I
                couldn&apos;t find a better picture 😭)
              </p>
            </div>
          </div>

          <p className={styles.description}>
            I&apos;m passionate about software development, particularly in web
            and cloud technologies. I also really like system design and
            software architecture, exploring how software can scale and handle
            millions of users. <br />
            <br />
            Learning the concept behind real-world systems and how big tech
            companies solve complex engineering challenges at scale is pretty
            interesting.
          </p>

          <p className={styles.description}>
            Some programming languages and frameworks/tools I&apos;m familiar
            with are:
            <br />
            <div
              style={{
                display: "flex",
                marginTop: "1rem",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/C.svg"
                alt="C"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg"
                alt="JavaScript"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg"
                alt="TypeScript"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/ExpressJS-Dark.svg"
                alt="Express.js"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg"
                alt="Next.js"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PostgreSQL-Dark.svg"
                alt="PostgreSQL"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg"
                alt="Git"
                width={50}
                height={50}
              />
              <Image
                src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Java-Dark.svg"
                alt="Java"
                width={50}
                height={50}
              />
            </div>
          </p>

          <p className={styles.description}>
            Apart from crashing out (programming), you can find me at the gym,
            hanging out with my friends, listening to my curated music playlists
            or playing the digital piano. <br />
            <br />I used to play a lot of video games in the past (1500+ hours
            in R6, 1000+ on Fortnite, 500+ in GTA V... and the list goes on),
            but I stopped since I wanted to focus on university.
          </p>

          <p className={styles.photoIntro}>
            Oh by the way, I also like photography. Here are some cool photos
            I&apos;ve taken:
          </p>

          <div className={styles.photos}>
            <TiltedCard
              imageSrc="/city.png"
              altText=""
              captionText=""
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={20}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="/ranchi.png"
              altText=""
              captionText=""
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={20}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="/1.png"
              altText=""
              captionText=""
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={20}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="/3.png"
              altText=""
              captionText=""
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={20}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />

            <TiltedCard
              imageSrc="/5.png"
              altText=""
              captionText=""
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="200px"
              imageWidth="200px"
              rotateAmplitude={0}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
