import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Dalana } from "./Dalana";

export function SocialContainer() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="flex-col items-center felx justify-evenly sm:flex md:flex md:grid-cols-1">
          <div>
            <Dalana />
          </div>
          <p>Moda Infantil. Diseños Personalizados. Revisa nuestro catálogo. etc.</p>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between w- ">
          <div></div>
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-blue-500"/>
            <Footer.Icon href="https://www.instagram.com/dalanakids?igsh=MWtzeTB3bXBxZzV6MQ== " target="_blank" icon={BsInstagram} className="text-red-500"/>
            <Footer.Icon href="whatsapp://send?text=Hola&phone=+573227230484" icon={BsWhatsapp} target="_blank" className="text-green-500"/>
          </div>
        </div>
      </div>
    </Footer>
  );
}