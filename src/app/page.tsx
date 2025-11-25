"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Brain, Cloud, CreditCard, Leaf, LinkIcon, Microscope, Zap, Target, Lightbulb, Users, Award, Linkedin, Twitter, Globe, Github } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="radialGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="VentureFund"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095176643-xu2vuv0n.jpg"
          logoAlt="VentureFund Logo"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "features" },
            { name: "Team", id: "team" },
            { name: "Success Stories", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get in Touch",
            href: "contact"
          }}
          buttonClassName="font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Strategic Capital for Tomorrow's Leaders"
          description="We invest in ambitious founders building transformative companies. Our deep industry expertise and extensive network accelerate your growth."
          tag="Venture Capital"
          tagIcon={Zap}
          buttons={[
            { text: "Explore Opportunities", href: "about" },
            { text: "Meet the Team", href: "team" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095177279-bt03yixl.jpg",
              imageAlt: "Modern startup office environment"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095178182-450w98am.jpg",
              imageAlt: "Collaborative tech innovation meeting"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095178671-oy64h9do.jpg",
              imageAlt: "Investment portfolio growth visualization"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095179421-1fatgyo6.jpg",
              imageAlt: "Venture capital networking conference"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095180152-jkqhiii3.jpg",
              imageAlt: "Digital transformation technology showcase"
            }
          ]}
          className="w-full"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg md:text-xl"
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="Our Vision"
          title="Empowering Visionary Founders"
          description="We believe the best founders create industries, not just companies. Our fund provides strategic capital, industry connections, and operational expertise to help you scale exponentially. With over 150 successful exits and a combined portfolio value exceeding $2.5B, we've proven our ability to identify and nurture world-class founders."
          tagIcon={Target}
          buttons={[
            { text: "View Our Track Record", href: "testimonials" }
          ]}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095180938-l2jancoe.jpg",
            imageAlt: "Investment tracking application interface"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095181596-gmr3c48t.jpg",
            imageAlt: "Portfolio dashboard and analytics"
          }}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="What We Invest In"
          description="We focus on high-growth sectors with transformative potential. Our expertise spans multiple industries with singular focus on founders who dare to reimagine the future."
          tag="Investment Areas"
          tagIcon={Lightbulb}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              title: "Enterprise SaaS",
              description: "Cloud-native solutions that transform how enterprises operate. We back companies building the infrastructure for the digital era.",
              icon: Cloud
            },
            {
              title: "AI & Machine Learning",
              description: "Cutting-edge AI applications solving real business problems. From autonomous systems to intelligent automation, we invest in AI's future.",
              icon: Brain
            },
            {
              title: "Fintech Innovation",
              description: "Reimagining financial services for the digital age. We support founders disrupting payments, lending, and wealth management.",
              icon: CreditCard
            },
            {
              title: "Deep Tech",
              description: "Physics-based innovations with massive scale potential. Quantum computing, biotech, and advanced materials are our playground.",
              icon: Microscope
            },
            {
              title: "Climate Tech",
              description: "Sustainable solutions addressing climate challenges. We fund founders making environmental impact profitable and scalable.",
              icon: Leaf
            },
            {
              title: "Web3 & Blockchain",
              description: "Decentralized systems transforming trust and ownership. We invest in protocols and applications reshaping the internet.",
              icon: LinkIcon
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Partners"
          description="Seasoned operators who've built billion-dollar companies. Our team brings decades of entrepreneurial experience and an extensive network of industry leaders."
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Founding Partner",
              description: "Former CEO of TechVentures Inc. Led 12 successful exits across cloud and fintech. Stanford MBA, 18 years in venture.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095182124-s7wykioa.jpg",
              imageAlt: "Sarah Mitchell portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "James Chen",
              role: "Managing Partner",
              description: "Software entrepreneur and investor. Built SaaS unicorn now valued at $1.2B. Deep expertise in enterprise sales and operations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095182845-mo0nc2as.jpg",
              imageAlt: "James Chen portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://jameschen.com" }
              ]
            },
            {
              id: "3",
              name: "Victoria Rodriguez",
              role: "Partner, Deep Tech",
              description: "PhD Physics, formerly at CERN. Invested in 8 quantum computing and biotech startups. Board member at 3 portfolio companies.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095183551-ke68p4au.jpg",
              imageAlt: "Victoria Rodriguez portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" }
              ]
            },
            {
              id: "4",
              name: "Marcus Thompson",
              role: "Partner, Fintech",
              description: "Former Goldman Sachs MD. 15 years in financial services. Portfolio includes 5 fintech unicorns and 2 successful IPOs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095184682-ktdcxfkc.jpg",
              imageAlt: "Marcus Thompson portrait",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Portfolio Company Success"
          description="Our founders share their journey of growth, backed by strategic capital and expert guidance from our team."
          tag="Success Stories"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alex Kumar",
              handle: "@alexkumar",
              testimonial: "VentureFund didn't just provide capital—they provided strategic guidance that accelerated our go-to-market by 6 months. Their network opened doors we couldn't have opened ourselves. Now valued at $500M.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095185260-19sub5t5.jpg",
              imageAlt: "Alex Kumar portrait"
            },
            {
              id: "2",
              name: "Emma Thompson",
              handle: "@emmathompson",
              testimonial: "The deep tech expertise on their team was invaluable. They understood our quantum computing challenges at a level most investors don't. Their introductions to our first enterprise customer changed everything.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095186365-zg9mas4k.jpg",
              imageAlt: "Emma Thompson portrait"
            },
            {
              id: "3",
              name: "David Park",
              handle: "@davidpark",
              testimonial: "As first-time founders, we needed more than just funding. VentureFund became our strategic partner, connecting us with talent, customers, and future investors. We've raised 3 additional rounds through their network.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095186910-e3fu06pn.jpg",
              imageAlt: "David Park portrait"
            },
            {
              id: "4",
              name: "Lisa Wong",
              handle: "@lisawong",
              testimonial: "Their fintech expertise is second to none. They helped us navigate regulatory challenges and connected us with banking partners. This fund truly understands how to scale in regulated industries.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095187385-j7nlmzav.jpg",
              imageAlt: "Lisa Wong portrait"
            },
            {
              id: "5",
              name: "Michael Dubois",
              handle: "@michaeldubois",
              testimonial: "Invested in our Series A and then stayed actively involved. Their board participation led to 3 strategic partnerships that became major revenue drivers. Exceptional value-add investors.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095188056-4hd8tqlb.jpg",
              imageAlt: "Michael Dubois portrait"
            },
            {
              id: "6",
              name: "Priya Kapoor",
              handle: "@priyakapoor",
              testimonial: "We exited at a 25x return in 4 years. VentureFund's early belief in our vision, combined with their operational guidance, made all the difference. Grateful partners for our entire journey.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095188851-6b0hpl0y.jpg",
              imageAlt: "Priya Kapoor portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Start a Conversation"
          description="Tell us about your vision, team, and market opportunity. We're excited to learn about founders building the future."
          inputs={[
            { name: "name", type: "text", placeholder: "Your name", required: true },
            { name: "email", type: "email", placeholder: "Email address", required: true },
            { name: "company", type: "text", placeholder: "Company name", required: true },
            { name: "industry", type: "text", placeholder: "Industry focus", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your vision and what stage you're at. Seed? Series A? Pre-product?",
            rows: 6,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095189385-hcveu84l.jpg"
          imageAlt="Professional office environment"
          mediaPosition="right"
          buttonText="Send Pitch"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="VentureFund"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35yrpe4kav0x1CwIekFPdRxiVfn/uploaded-1764095176643-xu2vuv0n.jpg"
          logoWidth={140}
          logoHeight={40}
          copyrightText="© 2025 VentureFund Capital Partners. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Team", href: "team" },
                { label: "Portfolio", href: "testimonials" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Focus Areas",
              items: [
                { label: "Enterprise SaaS", href: "#" },
                { label: "AI & Machine Learning", href: "#" },
                { label: "Fintech", href: "#" },
                { label: "Deep Tech", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Disclaimer", href: "#" },
                { label: "Sitemap", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}