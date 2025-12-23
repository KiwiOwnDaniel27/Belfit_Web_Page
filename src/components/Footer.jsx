const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <h1 className="text-1xl font-bold text-center">Belfit Asesorías Fitness
                <br />
                Derechos reservados
                <br />
                DQ Company
            </h1>
           
            <div className="flex gap-9 text-1xl" >
                <a href="#inicio">Ir a Inicio</a>
                <a href="#acercade">Acerca de</a>
                <a href="#project">Pago</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/daniel-quiguango-delgado-53b52a262/" target="_blank">
                    <i className="ri-linkedin-fill ri-2x"></i>
                </a>
                <a href="https://wa.me/+593984611893" target="_blank">
                    <i className="ri-whatsapp-fill ri-2x"></i>
                </a>
                <a href="https://www.instagram.com/belfit.uio?igsh=dms4NTN1dm51d3ht" target="_blank">
                    <i className="ri-instagram-fill ri-2x"></i>
                </a>
            </div>
        </div>
    );
};


export default Footer;