"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Download,
  Plane,
  LightbulbIcon,
  Shield,
  FileText,
  AlertCircle,
  Users,
  Package,
} from "@/components/ui/lucide-icons";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const aircraftImages = [
    "/images/plane1.jpg",
    "/images/plane2.jpg",
    "/images/plane3.jpg",
    "/images/plane4.jpg"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-6xl flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-black" />
            <span className="text-xl font-bold text-gray-900">Part-IS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-300">Home</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-300">Solutions</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-300">Resources</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-300">About</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-300">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden md:inline-flex transition-all duration-300 hover:bg-gray-50">Log in</Button>
            <Button size="sm" className="hidden md:inline-flex bg-black hover:bg-gray-800 transition-all duration-300">Book a Demo</Button>
            <button 
              onClick={toggleMenu} 
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-4 py-2 pb-4 bg-white shadow-md">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-300 py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-300 py-2">Solutions</a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-300 py-2">Resources</a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-300 py-2">About</a>
              <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors duration-300 py-2">Contact</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" className="transition-all duration-300 hover:bg-gray-50">Log in</Button>
                <Button size="sm" className="bg-black hover:bg-gray-800 transition-all duration-300">Book a Demo</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-6xl flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Part-IS Compliance <span className="text-black">Made Simple</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Helping Aviation Organisations Build Secure, Compliant, and Resilient ISMS Frameworks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-6 rounded-md transition-all duration-300 ease-in-out hover:shadow-md">
              <Download className="mr-2 h-5 w-5" />
              Download our Cheat Sheet
            </Button>
            <Button variant="outline" className="px-6 py-6 rounded-md border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300 ease-in-out">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gray-200 rounded-xl h-[400px] w-full shadow-md transition-shadow duration-300 hover:shadow-lg flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src={aircraftImages[1]} 
                alt="Aircraft illustration" 
                fill 
                className="object-cover"
                style={{ filter: "brightness(0.9)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is EASA Part-IS Regulation */}
      <section className="container mx-auto px-4 py-16 max-w-6xl space-y-8 bg-gray-50 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="bg-black p-1 rounded-md mt-1">
            <CheckCircle2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">What is EASA Part-IS Regulation?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              EASA Part-IS is a set of rules that aims to address information security risks at the entity level by 
              establishing processes to ensure the protection of all elements identified as part of its scope. It mandates 
              the implementation of a mature Information Security Management System and its integration with your 
              existing Safety Management System.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Whether you&apos;re an AOC holder, CAMO, ATO, ANSP, or Maintenance Organisation, Part-IS compliance is no 
              longer optional, it&apos;s a regulatory obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Deadlines */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">Upcoming Compliance Deadlines</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <Card className="md:w-[350px] text-center transition-all duration-300 hover:shadow-md">
            <CardHeader className="flex items-center justify-center pb-2">
              <div className="bg-gray-200 h-24 w-24 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                <div className="relative h-24 w-24">
                  <Image 
                    src={aircraftImages[0]} 
                    alt="Deadline icon" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              <CardTitle className="text-2xl mt-4">16 October 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Airports, Design & Production Organisations</p>
              <Badge className="mt-4 bg-gray-200 text-gray-700 border-gray-300">1/1</Badge>
            </CardContent>
          </Card>

          <Card className="md:w-[350px] text-center transition-all duration-300 hover:shadow-md">
            <CardHeader className="flex items-center justify-center pb-2">
              <div className="bg-gray-200 h-24 w-24 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                <div className="relative h-24 w-24">
                  <Image 
                    src={aircraftImages[3]} 
                    alt="Deadline icon" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              <CardTitle className="text-2xl mt-4">22 February 2026</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">AOCs, CAMOs, ANSPs, ATOs, and others</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Offer */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex items-center gap-2 mb-8">
          <LightbulbIcon className="h-10 w-10 text-gray-600" />
          <h2 className="text-4xl font-bold">What We Offer</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-200 rounded-xl h-[300px] shadow-sm transition-shadow duration-300 hover:shadow-md flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src={aircraftImages[2]} 
                alt="Templates and Guides" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Templates & Guides</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              From policy templates to full compliance audits, we scale our service to match your functional chain 
              complexity, IT architecture, and internal structure.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-5 rounded-md transition-all duration-300 ease-in-out hover:shadow-md">
              <Download className="mr-2 h-5 w-5" />
              Download our Cheat Sheet
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Intuitive Software Tool</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Get in touch for a free consultation to assess your compliance readiness and a detailed walkthrough of our
              software solution.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-5 rounded-md transition-all duration-300 ease-in-out hover:shadow-md">
              View a Demo
            </Button>
          </div>
          <div className="bg-gray-200 rounded-xl h-[300px] shadow-sm transition-shadow duration-300 hover:shadow-md flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src={aircraftImages[0]} 
                alt="Software Tool" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Expertise */}
      <section className="container mx-auto px-4 py-16 max-w-6xl bg-gradient-to-b from-white to-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-xl h-[300px] shadow-sm transition-shadow duration-300 hover:shadow-md flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src={aircraftImages[1]} 
                alt="Trusted Expertise" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Trusted Expertise</h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our team includes aviation compliance professionals with deep knowledge of ISO 27001, SMS/ISMS integration, and
              cyber risk management.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-5 rounded-md transition-all duration-300 ease-in-out hover:shadow-md">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* Proportionality callout */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="bg-gray-100 rounded-lg p-8 text-center shadow-sm border border-gray-200 transition-shadow duration-300 hover:shadow-md">
          <p className="text-2xl text-gray-800">
            We&apos;re also proportionality-aware, adapting tools for small operators and high-complexity organisations alike.
          </p>
        </div>
      </section>

      {/* Who We Help */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex items-center gap-2 mb-12">
          <Plane className="h-10 w-10 text-gray-700" />
          <h2 className="text-4xl font-bold">Who We Help</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["AOC Holders", "Part-CAMOs", "Part-145", "Part-ORA", "ANSPs", "Part-21", "Aerodromes", "Exclusions"].map((item, index) => (
            <div key={item} className="bg-gray-50 rounded-full py-4 px-8 flex items-center gap-3 shadow-sm border border-gray-200 transition-all duration-300 ease-in-out hover:shadow-md hover:bg-white cursor-pointer">
              <div className="bg-gray-200 text-gray-700 h-8 w-8 rounded-full flex items-center justify-center overflow-hidden">
                <div className="relative h-8 w-8">
                  <Image 
                    src={aircraftImages[index % 4]} 
                    alt="Airplane icon" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-lg font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Part-IS Compliance Platform */}
      <section className="container mx-auto px-4 py-16 max-w-6xl bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 mb-12">
          <Shield className="h-10 w-10 text-gray-700" />
          <h2 className="text-4xl font-bold">Our Part-IS Compliance Platform Covers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white border-t-4 border-t-gray-800 transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <div className="bg-gray-100 text-gray-800 h-12 w-12 rounded-md mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">
                Risk Assessment & Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Run EASA-aligned initial and ongoing risk assessments.
              </p>
              <p className="text-lg">
                Capture internal and interface risks between departments and third-party stakeholders.
              </p>
              <p className="text-lg">
                Customise risk matrices and treatment plans tailored to aviation environments.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-t-4 border-t-gray-600 transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <div className="bg-gray-100 text-gray-800 h-12 w-12 rounded-md mb-4 flex items-center justify-center">
                <FileText className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">
                ISMS Documentation & ISMM Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Build a fully compliant Information Security Management Manual.
              </p>
              <p className="text-lg">
                Automate documentation around scope, change management, and contractor oversight.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-t-4 border-t-gray-400 transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <div className="bg-gray-100 text-gray-800 h-12 w-12 rounded-md mb-4 flex items-center justify-center">
                <AlertCircle className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">
                Incident Detection & Reporting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Set up workflows for incident detection, response, recovery, and reporting.
              </p>
              <p className="text-lg">
                Integrate with ECCAIRS for external notification to competent authorities.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-t-4 border-t-gray-800 transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <div className="bg-gray-100 text-gray-800 h-12 w-12 rounded-md mb-4 flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">
                Training & Personnel Competence
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Develop role-based training programs tailored to your organization.
              </p>
              <p className="text-lg">
                Track and manage personnel competencies required by Part-IS.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-t-4 border-t-gray-600 transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <div className="bg-gray-100 text-gray-800 h-12 w-12 rounded-md mb-4 flex items-center justify-center">
                <Package className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">
                Supplier & Functional Chain Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Implement supplier assessment and oversight procedures.
              </p>
              <p className="text-lg">
                Manage your functional chain security requirements efficiently.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* EASA Oversight Levels */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our platform is aligned with the official EASA oversight levels
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
          <div className="text-center transition-all duration-300 hover:opacity-90 cursor-pointer">
            <div className="bg-gray-800 h-24 w-24 rounded-md mx-auto mb-6 shadow-md flex items-center justify-center text-white text-4xl font-bold">1</div>
            <h3 className="text-2xl font-bold">Present & Suitable</h3>
          </div>
          
          <div className="text-center transition-all duration-300 hover:opacity-90 cursor-pointer">
            <div className="bg-gray-600 h-24 w-24 rounded-md mx-auto mb-6 shadow-md flex items-center justify-center text-white text-4xl font-bold">2</div>
            <h3 className="text-2xl font-bold">Operating</h3>
          </div>
          
          <div className="text-center transition-all duration-300 hover:opacity-90 cursor-pointer">
            <div className="bg-gray-400 h-24 w-24 rounded-md mx-auto mb-6 shadow-md flex items-center justify-center text-white text-4xl font-bold">3</div>
            <h3 className="text-2xl font-bold">Effective</h3>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16 mb-16 max-w-6xl">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-md p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to simplify your Part-IS compliance journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get started today with our comprehensive platform designed specifically for aviation organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 rounded-md transition-all duration-300 ease-in-out hover:shadow-md">
              Book a Demo
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-md transition-all duration-300 ease-in-out">
              Download Resources
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-white mr-2" />
                <h3 className="text-2xl font-bold">Part-IS Compliance</h3>
              </div>
              <p className="text-gray-400 mb-6">Making aviation cybersecurity compliance achievable for organizations of all sizes.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63A10.012 10.012 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Risk Assessment</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">ISMS Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Incident Management</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Training</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cheat Sheet</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Templates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Webinars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Part-IS Compliance Platform. All rights reserved.</p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 justify-center">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
