/**
 * @typedef {{ id: number; title: string; imageURL: string; publish: string; author: string | Array<string>; description?: string;  }} Book
 * @typedef {Array<Book>} Books
 */

/**
 * @type {Books}
 */
const BOOKS = [
  {
    id: 1,
    title: "Learning React Native: Building Native Mobile Apps with JavaScript",
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/71YzPCBhC0L.jpg",
    publish: "2015",
    author:"Bonnie Eisenman",
    description: "React Native is an open-source mobile application framework for building native apps using React."
  },
  {
    id: 2,
    title: "Eloquent JavaScript: A Modern Introduction to Programming",
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX376_BO1,204,203,200_.jpg",
    publish: "2018",
    author:"Marijn Haverbeke",
    description: "JavaScript is a high-level, dynamic, untyped, and interpreted programming language."
  },
  {
    id: 3,
    title: "Learn Ruby in 24 Hours Or Less - A Beginners Guide To Learning Ruby Programming Now",
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/41GnXGc1J-L._SX331_BO1,204,203,200_.jpg",
    publish: "2016",
    author:"Robert Dwight",
    description: "Ruby is a dynamic, interpreted, object-oriented, general-purpose programming language."
  },
  {
    id: 4,
    title: "Learn to Program with Java 2021 Edition",
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/41AfWmzx-nL._SX258_BO1,204,203,200_.jpg",
    publish: "2020",
    author: [
      "John Smiley",
      "Lynda Dehring"
    ],
    description: "Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible."
  },
  {
    id: 5,
    title: "HTML and CSS: Design and Build Websites",
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/81aZlKYjIBL.jpg",
    publish: "2011",
    author:"Jon Duckett",
    description: "HTML and CSS are the building blocks of the Web. In this practical book, you’ll learn how to build a professional website with HTML5 and CSS3, and how to make it look good on all devices."
  },
  {
    id: 6,
    title: "Cometas en el Cielo",
    imageURL: "https://m.media-amazon.com/images/I/31VeplVJucL.jpg",
    publish: "2003",
    author: "Khaled Hosseini"
  },
  {
    id: 7,
    title: "Mil Soles Esplendidos",
    imageURL: "https://images-na.ssl-images-amazon.com/images/I/51+ehSCgmuL._SX317_BO1,204,203,200_.jpg",
    publish: "2007",
    author: "Khaled Hosseini"
  },
  {
    id: 8,
    title: "Cien años de soledad",
    imageURL: "https://images.cdn1.buscalibre.com/fit-in/360x360/a9/0c/a90cb063637b0b991165a9b109ce002a.jpg",
    publish: "1967",
    author:"Gabriel García Márquez",
    description: "narra la historia de la peculiar familia Buendía en el pueblo de Macondo.Una historia que se desarrolla a través de las aventuras y desventuras que sufre la familia, generación a generación."
  },
  {
    id: 9,
    title: "Putas y Guerrilleras",
    imageURL: "https://planetadelibrosar3.cdnstatics.com/usuaris/libros/fotos/313/m_libros/portada_putas-y-guerrilleras_olga-wornat_202002111951.jpg",
    publish: "2014",
    author: [
      "Olga Wornat",
      "Miriam Lewin"
    ]
  },
  {
    id: 10,
    title: "Amor en Tiempos de Colera",
    imageURL: "https://imagessl7.casadellibro.com/a/l/t7/07/9788494314407.jpg",
    publish: "1985",
    author:"Gabriel García Márquez",
    description: "Una artista expatriada y un ex-banquero portugués se han conocido en la capital francesa y juntos se enfrentarán a la disparidad de los sentimientos, a su propia memoria individual y a los mutuos desencantos."
  },
  {
    id: 11,
    title: "El Tren del Olvido",
    imageURL: "https://www.planetadelibros.com.ar/usuaris/libros/fotos/301/m_libros/portada_el-tren-del-olvido_moira-millan_201907111546.jpg",
    publish: "2019",
    author:"Moira Millán",
    description: "El tren del olvido es una novela de terror escrita por Moira Millán, que narra la historia de una mujer que se encuentra en el tren del olvido, en una ciudad de la península de Galicia, en el año de la Segunda Guerra Mundial."
  }
]

export { BOOKS }
export default BOOKS