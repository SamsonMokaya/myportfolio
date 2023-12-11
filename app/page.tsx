import ContactForm from '@/components/main/ContactForm';
import Footer from '@/components/main/Footer';
import Hero from '@/components/main/Hero';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skils';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
