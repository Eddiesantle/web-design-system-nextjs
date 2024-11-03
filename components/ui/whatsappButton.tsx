import Image from 'next/image';
import React from 'react';


const WhatsappButton = () => {
    const whatsappNumber = '5599999999'; // Coloque o número de WhatsApp no formato internacional
    const message = 'Olá, gostaria de mais informações!'; // Mensagem inicial

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-20 bg-white hover:bg-gray-50 rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-50"
        >
            <Image src="/img/home/icon-whatsapp-green.svg" alt='icon whatsapp' height={30} width={30} />
        </a>
    );
};

export default WhatsappButton;
