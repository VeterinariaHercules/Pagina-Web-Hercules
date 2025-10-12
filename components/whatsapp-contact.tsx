import React from "react";
import Link from "next/link";

const WhatsappContact = () => {
  return (
    <div className="bg-indigo-50 py-16 rounded-lg shadow-sm text-center">
      {/* Título */}
      <h2 className="text-3xl font-bold text-indigo-800 mb-4">Contáctanos</h2>

      {/* Descripción */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Estamos aquí para responder tus preguntas y atender a tu mascota.
        Contáctanos por WhatsApp para una respuesta rápida y personalizada.
      </p>

      {/* Botones estilo alternado */}
      <div className="inline-flex rounded-lg border border-green-500 overflow-hidden shadow-md mx-auto">
        {/* Sede 1 */}
        <Link
          href="https://wa.me/573116370334"
          target="_blank"
          className="flex items-center gap-3 justify-center px-8 py-4 text-white bg-green-500 hover:bg-green-600 transition-all text-sm sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="text-white"
          >
            <path d="M16.002 2.999a13 13 0 00-11.318 19.52L2 30l7.688-2.657A13 13 0 1016.001 3zM16 6a10 10 0 017.268 16.692l-.474.485-4.57-1.579-.647.044c-.602.04-1.308.087-5.091-3.34-2.045-2.034-2.39-2.67-2.49-3.118a2.437 2.437 0 01.647-2.226l.313-.321.46-.026c.278-.017.513-.025.695.016.181.04.57.22.931.834.273.457.578 1.013.66 1.18.132.27.109.57-.061.817l-.355.52.36.362c.52.523.948.956 1.298 1.282 1.326 1.244 1.57 1.144 2.01.95l.493-.22c.245-.111.499-.07.68.104.092.088 1.935 1.31 2.132 1.44l.27.18-.134.352A10.003 10.003 0 0116 26c-1.478 0-2.877-.326-4.175-.962l-.498-.248-4.571 1.579 1.578-4.57-.248-.497A10 10 0 0116 6z" />
          </svg>
          Sede 1
        </Link>

        {/* Sede 2 */}
        <Link
          href="https://wa.me/573242676234"
          target="_blank"
          className="flex items-center gap-3 justify-center px-8 py-4 text-green-600 bg-white hover:bg-green-100 transition-all border-l border-green-500 text-sm sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="text-green-600"
          >
            <path d="M16.002 2.999a13 13 0 00-11.318 19.52L2 30l7.688-2.657A13 13 0 1016.001 3zM16 6a10 10 0 017.268 16.692l-.474.485-4.57-1.579-.647.044c-.602.04-1.308.087-5.091-3.34-2.045-2.034-2.39-2.67-2.49-3.118a2.437 2.437 0 01.647-2.226l.313-.321.46-.026c.278-.017.513-.025.695.016.181.04.57.22.931.834.273.457.578 1.013.66 1.18.132.27.109.57-.061.817l-.355.52.36.362c.52.523.948.956 1.298 1.282 1.326 1.244 1.57 1.144 2.01.95l.493-.22c.245-.111.499-.07.68.104.092.088 1.935 1.31 2.132 1.44l.27.18-.134.352A10.003 10.003 0 0116 26c-1.478 0-2.877-.326-4.175-.962l-.498-.248-4.571 1.579 1.578-4.57-.248-.497A10 10 0 0116 6z" />
          </svg>
          Sede 2
        </Link>
      </div>

      {/* Pie de texto */}
      <p className="text-gray-500 text-sm mt-6">
        📍 Disponible las 24 horas — Clínica Veterinaria Hércules
      </p>
    </div>
  );
};

export default WhatsappContact;

