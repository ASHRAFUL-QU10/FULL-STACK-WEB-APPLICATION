import React from "react";
import { BsWhatsapp } from "react-icons/bs";
export default function WhatsAppIcon() {
	return (
		<a
			target="_blank"
			ria-label="Chat on WhatsApp"
			href="https://wa.me/+8801947466442"
			className="fixed right-5 bottom-5 md:right-10 md:bottom-10 bg-[#25D366] text-white p-3 text-3xl rounded-full z-20 ease-in-out active:scale-95 duration-100"
		>
			<BsWhatsapp />
		</a>
	);
}
