import React from "react";
import Link from "next/link";
import { person, social } from "@/app/resources/content";
import { Column, Flex, Text, Heading } from "@/once-ui/components";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8 mt-16">
      <div className="container mx-auto flex flex-wrap justify-between items-start gap-8">

        {/* Company Info */}
        <Column className="w-full md:w-1/4 mb-6 md:mb-0">
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            {person.name}
          </Heading>
          <Text variant="body-default-s">
            Building bridges between Technology and Innovation. I craft intuitive user needs and build my own projects.
          </Text>
        </Column>

        {/* Products Section */}
        <Column className="w-full md:w-1/6 mb-6 md:mb-0">
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            Products
          </Heading>
          <ul className="space-y-2">
            <li><Link href="#!" className="hover:underline">Product A</Link></li>
            <li><Link href="#!" className="hover:underline">Product B</Link></li>
            <li><Link href="#!" className="hover:underline">Product C</Link></li>
          </ul>
        </Column>

        {/* Useful Links Section */}
        <Column className="w-full md:w-1/6 mb-6 md:mb-0">
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            Useful Links
          </Heading>
          <ul className="space-y-2">
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/refund" className="hover:underline">Refund & Cancellation</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </Column>

        {/* Contact Section */}
        <Column className="w-full md:w-1/4 mb-6 md:mb-0">
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            Contact
          </Heading>
          <Text variant="body-default-s" className="mb-2">
            <i className="fas fa-home mr-3"></i> {person.location}
          </Text>
          <Text variant="body-default-s" className="mb-2">
            <i className="fas fa-envelope mr-3"></i> {person.email}
          </Text>
          <Text variant="body-default-s" className="mb-2">
            <i className="fas fa-phone mr-3"></i> + 01 234 567 88
          </Text>
        </Column>

      </div>

      {/* Social Media and Copyright */}
      <div className="border-t border-gray-700 pt-6 mt-6 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} {person.name}. All rights reserved.</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-4">
          {social.map((item) => (
            <a key={item.name} href={item.link} className="text-gray-400 hover:text-white transition-colors duration-200">
              <i className={`fab fa-${item.icon} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;