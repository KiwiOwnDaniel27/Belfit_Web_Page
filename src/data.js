import HeroImage from "/assets/LOGO-BELT.webp";
import HeroImage1 from "/assets/belen_asesora.webp";

const Image = {
  HeroImage,
  HeroImage1,
};

export default Image;

import Tools1 from "/assets/tools/program1.jpeg";
import Tools2 from "/assets/tools/program2.jpeg";
import Tools3 from "/assets/tools/program3.jpeg";
import Tools4 from "/assets/tools/program4.jpeg";
import Tools5 from "/assets/tools/program5.jpeg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Clases personales",
    ket: "",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Orientación",
    ket: "",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Comunidad",
    ket: "",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Gym Girls",
    ket: "",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Beneficios",
    ket: "",
    dad: "500",
  },
];

import Proyek1 from "/assets/proyek/pagos.jpg";
import Proyek2 from "/assets/proyek/money.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Tarjeta de débito o Transferencia",
    desk: "Puedes realiazar pagos con cualquier cuenta bancaria nacional o internacional",
    tools: ["Débito", "Transferencia"],
    dad: "200",
    link: "https://drive.google.com/file/d/1BM99TQvZkk5GNcaij4Y2t6QVFg1qF9Mc/view?usp=sharing" ,
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Pago en efectivo",
    desk: "Reserva con tiempo, puedes reservar y pagar en efectivo antes de empezar las clases",
    tools: ["Dolares"],
    dad: "300",
    link: "https://drive.google.com/file/d/1BM99TQvZkk5GNcaij4Y2t6QVFg1qF9Mc/view?usp=sharing" ,
  },
];
