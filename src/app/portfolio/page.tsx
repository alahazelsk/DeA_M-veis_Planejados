import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Portfólio | D&A Móveis Planejados',
  description: 'Explore os projetos de móveis planejados de alto padrão realizados pela D&A Móveis Planejados em Ribeirão Preto. Inspire-se com nossa qualidade e design.',
};

// Interface for Project data
interface Project {
  id: number;
  title: string;
  description: string;
  imagePlaceholders: string[]; // Array of placeholder texts for images
  category: string; // e.g., 'Cozinha', 'Dormitório'
}

// Sample Project Data (Replace with actual data and image paths later)
const projects: Project[] = [
  {
    id: 1,
    title: "Area Lazer",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/area_lazer/IMG-20230302-WA0002.jpg",
    ],
    category: "Area Lazer"
  },
  {
    id: 2,
    title: "Banheiros",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/banheiros/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.35_e17e8ccc.jpg",
      "/banheiros/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.44_19dcf7bb.jpg",
      "/banheiros/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.44_e4c0f6a6.jpg",
      "/banheiros/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.45_40d3dd09.jpg",
      "/banheiros/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.48_a4995b14.jpg",
      "/banheiros/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.49_201aeec3.jpg",
      "/banheiros/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.50_0d10acb2.jpg",
      "/banheiros/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.10_900f9f1a.jpg",
      "/banheiros/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.12_31ebf7d0.jpg",
      "/banheiros/IMG-20230302-WA0003.jpg",
    ],
    category: "Banheiros"
  },
  {
    id: 3,
    title: "Cantinho Cafe",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/cantinho_cafe/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.59_c76a83a0.jpg",
      "/cantinho_cafe/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.00_bc771679.jpg",
      "/cantinho_cafe/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.00_f8c4ee29.jpg",
      "/cantinho_cafe/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.04_62dd1f99.jpg",
      "/cantinho_cafe/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.04_a212fff6.jpg",
    ],
    category: "Cantinho Cafe"
  },
  {
    id: 4,
    title: "Circulacao",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/circulacao/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.34_33cd2aec.jpg",
      "/circulacao/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.35_7ed276cd.jpg",
      "/circulacao/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.43_19f029df.jpg",
      "/circulacao/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.43_2e19f614.jpg",
      "/circulacao/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.43_861d39a3.jpg",
    ],
    category: "Circulacao"
  },
  {
    id: 5,
    title: "Closet",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/closet/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.19_126c0852.jpg",
      "/closet/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.19_2bbfd6d6.jpg",
      "/closet/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.19_4c251385.jpg",
      "/closet/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.19_a5bf12ef.jpg",
      "/closet/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.20_77ca9ba4.jpg",
    ],
    category: "Closet"
  },
  {
    id: 6,
    title: "Corporativo",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.51_84da4e2b.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.04_1cfe651a.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.05_6d75e7dc.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.05_9499004c.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.05_ee4578b8.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.06_1826c056.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.06_e50964d7.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.06_e53dc7d7.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.06_f3e2fbad.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.07_24667799.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.07_2be93996.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.07_e842a63c.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.08_17b35775.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.08_406af2a7.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.08_cd0b4c7b.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.08_fabc0be6.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.09_180f7486.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.09_deb781f1.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.09_eeec909f.jpg",
      "/corporativo/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.10_39ed10fe.jpg",
      "/corporativo/IMG-20230127-WA0021.jpg",
      "/corporativo/IMG-20230127-WA0025.jpg",
      "/corporativo/IMG-20230206-WA0047.jpg",
      "/corporativo/IMG-20230206-WA0050.jpg",
      "/corporativo/IMG-20230206-WA0053.jpg",
      "/corporativo/IMG-20230206-WA0057.jpg",
      "/corporativo/IMG-20230206-WA0058.jpg",
      "/corporativo/IMG-20230206-WA0060.jpg",
      "/corporativo/IMG-20230206-WA0061.jpg",
      "/corporativo/IMG-20230206-WA0069.jpg",
      "/corporativo/IMG-20230206-WA0070.jpg",
      "/corporativo/IMG-20230208-WA0070.jpg",
    ],
    category: "Corporativo"
  },
  {
    id: 7,
    title: "Cozinhas",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.32_ba59262b.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.33_a907ca7d.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.33_b1ab2e93.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.33_ba53f1bb.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.40_6c702d32.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.41_353ea1eb.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.45_18c11afd.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.45_9aab2eff.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.46_1fb13359.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.47_1ad4cac4.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.48_cfbe94a1.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.49_3e0bfac6.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.49_c665439c.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.50_48738f16.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.51_744af8c1.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.52_67deb826.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.52_839a3917.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.53_31b3e14c.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.53_5b8bf203.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.53_785ca81a.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.53_a3bf79fc.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.54_1cf4edb4.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.54_b4cdb684.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.55_399e10c8.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.55_7f20d0fb.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.55_943bdc2e.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.55_9d65d42c.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.56_e8215e02.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.56_f18b3e4f.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.57_f1f330c9.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.10_128ba752.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.11_672c45c8.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.12_b28e6979.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.15_73f58514.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.16_4b8b8e9b.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.16_c1e063aa.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.16_e13cc8db.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.16_fbf70551.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.17_02bf0700.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.17_ac297f6b.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.17_c66f31d9.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.21_f725c7b8.jpg",
      "/cozinhas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.22_5f81eb3b.jpg",
      "/cozinhas/IMG-20230302-WA0005.jpg",
    ],
    category: "Cozinhas"
  },
  {
    id: 8,
    title: "Dormitorios",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.37_33fbe62c.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.38_670af089.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.39_217dfcb2.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.41_2394560f.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.41_baf3879d.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.42_4f00ba8d.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.42_525b0357.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.46_5c76adae.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.47_8b9aeeb6.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.47_a37a3f76.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.48_86855b25.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.56_ce9ecebd.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.56_e5c87464.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.57_452d99c7.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.57_e7c7bb39.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.58_50ee7e9b.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.58_b6e0b9cc.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.58_e36931be.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.59_25df264c.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.59_77c8fbe0.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.12_04feb042.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.13_6a5565ad.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.13_70e58a43.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.13_fc5c4766.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.14_e40333ff.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.14_f001cee6.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.18_09f255fe.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.18_2b475332.jpg",
      "/dormitorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.18_cda8b579.jpg",
    ],
    category: "Dormitorios"
  },
  {
    id: 9,
    title: "Escritorios",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/escritorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.39_ad76ef76.jpg",
      "/escritorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.51_870591c9.jpg",
      "/escritorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.52_a63ff1d4.jpg",
      "/escritorios/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.52_fb434e24.jpg",
    ],
    category: "Escritorios"
  },
  {
    id: 10,
    title: "Salas",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.31_2429c99d.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.31_3154c752.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.31_74d95153.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.31_efe5fa33.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.34_5414c0ac.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.36_fbe27f07.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.44_5d268438.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.44_fa72b25b.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.45_d8bf88fe.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.46_149870a8.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.47_5ebb0993.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.49_414eaf06.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.50_ab2f0e03.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.50_f07e5bdb.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.54_8539b09f.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.58_825c28d2.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.00_fbe022f1.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.01_0cb551dc.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.01_7f9585cc.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.01_9c192cf6.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.01_ce390103.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.02_56de03ba.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.02_81e435a5.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.02_d86c9b8f.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.03_40aee67d.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.03_76e468d3.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.03_affa338c.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.04_1cb6aada.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.10_6a79ce3d.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.11_263bc635.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.12_6e868ba7.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.14_92b9ef2c.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.15_b9f9d170.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.15_bbdf72b9.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.21_37018384.jpg",
      "/salas/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.21_fc6dc8ad.jpg",
      "/salas/IMG-20230302-WA0004.jpg",
      "/salas/IMG-20230302-WA0006.jpg",
    ],
    category: "Salas"
  },
  {
    id: 11,
    title: "Sala Jantar",
    description: "Confira alguns projetos realizados neste ambiente, combinando funcionalidade, estética e personalização.",
    imagePlaceholders: [
      "/sala_jantar/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.33_bebc10ed.jpg",
      "/sala_jantar/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.39_61670a11.jpg",
      "/sala_jantar/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.39_ee21b92c.jpg",
      "/sala_jantar/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.40_d66863ea.jpg",
      "/sala_jantar/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.40_fd8800e4.jpg",
      "/sala_jantar/Imagem do WhatsApp de 2025-05-08 à(s) 15.20.43_d3e6c6ac.jpg",
      "/sala_jantar/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.11_c9175e5e.jpg",
      "/sala_jantar/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.14_cfaa9384.jpg",
      "/sala_jantar/Imagem do WhatsApp de 2025-05-08 à(s) 15.21.20_bfd24d02.jpg",
    ],
    category: "Sala Jantar"
  },
],
    category: 'Cozinha'
  },
  {
    id: 2,
    title: "Suíte Master com Closet Integrado",
    description: "A suíte master foi projetada para ser um refúgio de tranquilidade e organização. O closet integrado, com portas de espelho bronze, amplia o ambiente e oferece soluções inteligentes de armazenamento. A cabeceira estofada e os painéis ripados complementam a decoração com elegância.",
    imagePlaceholders: ["Imagem 1 Suíte", "Imagem 2 Suíte", "Imagem 3 Suíte"],
    category: 'Dormitório'
  },
  {
    id: 3,
    title: "Home Office Funcional e Elegante",
    description: "Para este home office, o foco foi criar um espaço de trabalho produtivo sem abrir mão do estilo. A bancada ampla, os armários suspensos em tom neutro e a iluminação direcionada garantem conforto e organização. Detalhes em metal dourado adicionam um toque de sofisticação.",
    imagePlaceholders: ["Imagem 1 Home Office", "Imagem 2 Home Office"],
    category: 'Home Office'
  },
  // Add more sample projects as needed
];

export default function PortfolioPage() {
  // TODO: Implement filtering logic based on category later

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Portfólio: A Excelência D&A em Cada Projeto Realizado</h1>
        <p className="text-lg text-muted-foreground max-w-prose mx-auto">
          Navegue por nossa galeria de projetos e descubra a materialização do alto padrão em móveis planejados. Cada ambiente que criamos é um testemunho da nossa dedicação à qualidade, ao design exclusivo e à satisfação dos nossos clientes em Ribeirão Preto e região.
        </p>
      </section>

      {/* TODO: Add Filter Buttons Here */}
      {/* <div className="flex justify-center gap-2 mb-8">
        <Button variant="secondary">Todos</Button>
        <Button variant="outline">Cozinhas</Button>
        <Button variant="outline">Dormitórios</Button>
         Add other categories 
      </div> */} 

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-card border border-border rounded-lg overflow-hidden flex flex-col">
            {/* Image Placeholder - Carousel or single image */}
            <div className="h-56 bg-muted flex items-center justify-center text-muted-foreground">
              [{project.imagePlaceholders[0] || 'Imagem Projeto'}]
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
              {/* Optional: Link to a dedicated project page if needed */}
              {/* <Button variant="outline" size="sm" asChild>
                <Link href={`/portfolio/${project.id}`}>Ver Mais Detalhes</Link>
              </Button> */}
            </div>
          </div>
        ))}
      </section>

      <section className="text-center bg-secondary text-secondary-foreground p-8 rounded-lg">
         <h2 className="text-2xl font-semibold mb-4">Gostou do que Viu?</h2>
         <p className="mb-6 max-w-prose mx-auto">Imagine o que podemos fazer pelo seu espaço. Entre em contato conosco e solicite um orçamento para o seu projeto personalizado.</p>
         <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
            <Link href="/contato">Solicite seu Orçamento</Link>
          </Button>
      </section>
    </div>
  );
}

