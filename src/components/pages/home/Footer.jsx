import React from 'react'
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsCode } from "react-icons/bs";

export const MyFooter = () => {
  return (
    <Footer container className='bg-yellow-300'>
      <div className="w-full">
        <div className="grid w-full sm:justify-between sm:flex md:flex md:grid-cols-1">
          <div className='flex mb-4 font-semibold text-white font-size-xl'>
            <Footer.Brand
              src="/dalanakids/assets/dalanaKidsLogo.png"
              alt="Dalana Kids Logo"
              name="Dalana Kids"
              className='h-12 rounded-md sm:h-28'
            />Dalana Kids
          </div>
          <div className="flex flex-row gap-6 sm:gap-14">
            <div >
              <Footer.Title className='text-white' title="Nosotros" />
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Síguenos" className='text-white'/>
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className='text-white'/>
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">Políticas de Privacidad</Footer.Link>
                <Footer.Link href="#">Términos &amp; Condiciones</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2024}/>
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center " >
            <Footer.Icon href="#" icon={BsFacebook} className='text-white'/>
            <Footer.Icon href="#" icon={BsInstagram} className='text-white'/>
            <Footer.Icon href="#" icon={BsCode} className='text-white'/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
