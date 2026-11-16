export interface TableInfo {
  id: string;
  number: number;
  name: string;
  zone?: string;
  description?: string;
}

export interface GuestInfo {
  id: string;
  name: string;
  tableNumber: number;
  tableName: string;
  seat?: string;
  role?: string;
  notes?: string;
  aliases?: string[];
}

export const TABLES: TableInfo[] = [
  {
    id: "table-1",
    number: 1,
    name: "Table 1 — Principal Sponsors (Gentlemen)",
    zone: "Front Row, Stage Left",
    description: "Honored Principal Sponsors",
  },
  {
    id: "table-2",
    number: 2,
    name: "Table 2 — Principal Sponsors (Ladies)",
    zone: "Front Row, Stage Right",
    description: "Honored Principal Sponsors",
  },
  {
    id: "table-3",
    number: 3,
    name: "Table 3 — Groom's Immediate Family",
    zone: "VIP Area, Center Left",
    description: "Silao & Palaña Family",
  },
  {
    id: "table-4",
    number: 4,
    name: "Table 4 — Bride's Immediate Family",
    zone: "VIP Area, Center Right",
    description: "Listangco Family",
  },
  {
    id: "table-5",
    number: 5,
    name: "Table 5 — Bridal Entourage & Maid of Honor",
    zone: "Center Hall, near Dance Floor",
    description: "Bridesmaids & Matron of Honor",
  },
  {
    id: "table-6",
    number: 6,
    name: "Table 6 — Groomsmen & Best Man",
    zone: "Center Hall, near Dance Floor",
    description: "Groomsmen & Best Man",
  },
  {
    id: "table-7",
    number: 7,
    name: "Table 7 — Ministry & Pastoral Fellowship",
    zone: "Wing A, Garden View",
    description: "Pastors, Officiants & Ministry Friends",
  },
  {
    id: "table-8",
    number: 8,
    name: "Table 8 — Friends & Colleagues",
    zone: "Wing B",
    description: "Beloved Friends & Colleagues",
  },
  {
    id: "table-9",
    number: 9,
    name: "Table 9 — Extended Family & Relatives",
    zone: "Wing C",
    description: "Aunts, Uncles & Cousins",
  },
  {
    id: "table-10",
    number: 10,
    name: "Table 10 — Little Stars & Bearers Family",
    zone: "Wing D, Near Kids Area",
    description: "Bearers, Flower Girls & Parents",
  },
];

export const GUESTS: GuestInfo[] = [
  // Table 3: Groom's Family
  {
    id: "g-01",
    name: "Mr. Noel A. Silao",
    tableNumber: 3,
    tableName: "Table 3 — Groom's Immediate Family",
    role: "Father of the Groom",
    aliases: ["Noel Silao", "Papa Noel", "Noel"],
  },
  {
    id: "g-02",
    name: "Mrs. Jonna B. Palaña",
    tableNumber: 3,
    tableName: "Table 3 — Groom's Immediate Family",
    role: "Mother of the Groom",
    aliases: ["Jonna Palaña", "Jonna Silao", "Mama Jonna", "Jonna"],
  },
  {
    id: "g-03",
    name: "Mr. Christian Joel Silao",
    tableNumber: 6,
    tableName: "Table 6 — Groomsmen & Best Man",
    role: "Best Man",
    aliases: ["Christian Silao", "Joel Silao", "CJ Silao", "Christian"],
  },

  // Table 4: Bride's Family
  {
    id: "g-04",
    name: "Mr. Millier F. Listangco",
    tableNumber: 4,
    tableName: "Table 4 — Bride's Immediate Family",
    role: "Father of the Bride",
    aliases: ["Millier Listangco", "Papa Millier", "Miller"],
  },
  {
    id: "g-05",
    name: "Mrs. Paz R. Listangco",
    tableNumber: 4,
    tableName: "Table 4 — Bride's Immediate Family",
    role: "Mother of the Bride",
    aliases: ["Paz Listangco", "Mama Paz", "Paz"],
  },
  {
    id: "g-06",
    name: "Mrs. Kristene Joy Molina",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Matron of Honor",
    aliases: ["Kristene Molina", "Kristene Joy", "Tin-tin", "Kristene"],
  },

  // Solemnizing Officer & Officiants (Table 7)
  {
    id: "g-07",
    name: "Pastor Jonathan F. Ernacio",
    tableNumber: 7,
    tableName: "Table 7 — Ministry & Pastoral Fellowship",
    role: "Solemnizing Officer",
    aliases: ["Jonathan Ernacio", "Pastor Jonathan", "Ptr Jonathan", "Jonathan"],
  },
  {
    id: "g-08",
    name: "Mrs. Vanessa Lynn Ernacio",
    tableNumber: 7,
    tableName: "Table 7 — Ministry & Pastoral Fellowship",
    role: "Principal Sponsor",
    aliases: ["Vanessa Ernacio", "Vanessa Lynn", "Vanessa"],
  },

  // Principal Sponsors - Gentlemen (Table 1)
  {
    id: "g-09",
    name: "Pastor Arvin Mingoy",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Arvin Mingoy", "Ptr Arvin", "Arvin"],
  },
  {
    id: "g-10",
    name: "Pastor Rhenald Lagrimas",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Rhenald Lagrimas", "Ptr Rhenald", "Rhenald"],
  },
  {
    id: "g-11",
    name: "Pastor Reynaldo Fallesgon",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Reynaldo Fallesgon", "Ptr Reynaldo", "Reynaldo", "Rey"],
  },
  {
    id: "g-12",
    name: "Pastor Rodolfo Mancio",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Rodolfo Mancio", "Ptr Rodolfo", "Rodolfo", "Rudy"],
  },
  {
    id: "g-13",
    name: "Pastor Michael Lagrimas",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Michael Lagrimas", "Ptr Michael", "Mike Lagrimas", "Michael"],
  },
  {
    id: "g-14",
    name: "Pastor Joel Abegonia",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Joel Abegonia", "Ptr Joel", "Joel"],
  },
  {
    id: "g-15",
    name: "Hon. Cong. Sergio Dagooc",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Sergio Dagooc", "Cong Dagooc", "Sergio"],
  },
  {
    id: "g-16",
    name: "Hon. Br. Gen. George Banzon",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["George Banzon", "Gen Banzon", "George"],
  },
  {
    id: "g-17",
    name: "Mr. Rolando Gutang",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Rolando Gutang", "Rolando", "Rolly"],
  },
  {
    id: "g-18",
    name: "Mr. Aniano Silao, Jr.",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Aniano Silao", "Junior Silao", "Aniano"],
  },
  {
    id: "g-19",
    name: "Mr. Isidro Urbiztondo",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Isidro Urbiztondo", "Isidro", "Sidro"],
  },
  {
    id: "g-20",
    name: "Mr. Cleto Sescon",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Cleto Sescon", "Cleto"],
  },
  {
    id: "g-21",
    name: "Mr. John Elven Vega",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["John Elven Vega", "Elven Vega", "John Elven"],
  },
  {
    id: "g-22",
    name: "Mr. Loreto Sayson",
    tableNumber: 1,
    tableName: "Table 1 — Principal Sponsors (Gentlemen)",
    role: "Principal Sponsor",
    aliases: ["Loreto Sayson", "Loreto"],
  },

  // Principal Sponsors - Ladies (Table 2)
  {
    id: "g-23",
    name: "Dra. Teresa Mingoy",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Teresa Mingoy", "Dr Teresa Mingoy", "Tess Mingoy", "Teresa"],
  },
  {
    id: "g-24",
    name: "Mrs. Thelma Lagrimas",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Thelma Lagrimas", "Thelma"],
  },
  {
    id: "g-25",
    name: "Mrs. Grace Jeanette Fallesgon",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Grace Fallesgon", "Grace Jeanette", "Jeanette"],
  },
  {
    id: "g-26",
    name: "Mrs. Estelita Mancio",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Estelita Mancio", "Estelita", "Lita"],
  },
  {
    id: "g-27",
    name: "Mrs. Julie Ann Rose Lagrimas",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Julie Ann Lagrimas", "Julie Ann Rose", "Julie Ann"],
  },
  {
    id: "g-28",
    name: "Mrs. Imee Abegonia",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Imee Abegonia", "Imee"],
  },
  {
    id: "g-29",
    name: "Mrs. Amitha Dagooc",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Amitha Dagooc", "Amitha"],
  },
  {
    id: "g-30",
    name: "Atty. Maria Dulce Banzon",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Maria Dulce Banzon", "Atty Dulce Banzon", "Dulce Banzon", "Dulce"],
  },
  {
    id: "g-31",
    name: "Mrs. Belinda Gutang",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Belinda Gutang", "Belinda", "Baby Gutang"],
  },
  {
    id: "g-32",
    name: "Mrs. Jennifer Silao",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Jennifer Silao", "Jenny Silao", "Jennifer"],
  },
  {
    id: "g-33",
    name: "Mrs. Linda Urbiztondo",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Linda Urbiztondo", "Linda"],
  },
  {
    id: "g-34",
    name: "Mrs. Arlyn Sescon",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Arlyn Sescon", "Arlyn"],
  },
  {
    id: "g-35",
    name: "Mrs. Nelissa Vega",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Nelissa Vega", "Nelissa"],
  },
  {
    id: "g-36",
    name: "Mrs. Shirley Sayson",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Shirley Sayson", "Shirley"],
  },
  {
    id: "g-37",
    name: "Mrs. Nenita Putan",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Nenita Putan", "Nenita"],
  },
  {
    id: "g-38",
    name: "Mrs. Gabriela Tañedo",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Gabriela Tanedo", "Gabriela Tañedo", "Gaby Tañedo", "Gabriela"],
  },
  {
    id: "g-39",
    name: "Mrs. Rosemarie Velasco",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Rosemarie Velasco", "Rosemarie", "Rose Velasco"],
  },
  {
    id: "g-40",
    name: "Mrs. Ruby Watanabe",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Ruby Watanabe", "Ruby"],
  },
  {
    id: "g-41",
    name: "Mrs. Mary Grace Kimura",
    tableNumber: 2,
    tableName: "Table 2 — Principal Sponsors (Ladies)",
    role: "Principal Sponsor",
    aliases: ["Mary Grace Kimura", "Grace Kimura", "Mary Grace"],
  },

  // Secondary Sponsors (Table 6 & Table 5)
  {
    id: "g-42",
    name: "Mr. Mark Daniel Torrente",
    tableNumber: 6,
    tableName: "Table 6 — Groomsmen & Best Man",
    role: "Candle Sponsor",
    aliases: ["Mark Daniel Torrente", "Mark Torrente", "Daniel Torrente"],
  },
  {
    id: "g-43",
    name: "Ms. Jennica Pico",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Candle Sponsor",
    aliases: ["Jennica Pico", "Jennica"],
  },
  {
    id: "g-44",
    name: "Mr. Leonardo Aris Putan",
    tableNumber: 6,
    tableName: "Table 6 — Groomsmen & Best Man",
    role: "Veil Sponsor",
    aliases: ["Leonardo Putan", "Aris Putan", "Leonardo Aris"],
  },
  {
    id: "g-45",
    name: "Mrs. Mary Grace Putan",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Veil Sponsor",
    aliases: ["Mary Grace Putan", "Grace Putan"],
  },
  {
    id: "g-46",
    name: "Mr. Richard Jimenez",
    tableNumber: 6,
    tableName: "Table 6 — Groomsmen & Best Man",
    role: "Cord Sponsor",
    aliases: ["Richard Jimenez", "Richard"],
  },
  {
    id: "g-47",
    name: "Mrs. Junylen Jimenez",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Cord Sponsor",
    aliases: ["Junylen Jimenez", "Junylen"],
  },

  // Groomsmen (Table 6)
  {
    id: "g-48",
    name: "Mr. Mark Laurenz Listangco",
    tableNumber: 6,
    tableName: "Table 6 — Groomsmen & Best Man",
    role: "Groomsman",
    aliases: ["Mark Laurenz Listangco", "Laurenz Listangco", "Mark Laurenz", "Laurenz"],
  },
  {
    id: "g-49",
    name: "Ptr. Kristian Clavecillas",
    tableNumber: 6,
    tableName: "Table 6 — Groomsmen & Best Man",
    role: "Groomsman",
    aliases: ["Kristian Clavecillas", "Ptr Kristian", "Kristian"],
  },
  {
    id: "g-50",
    name: "Mr. John Carlo Ederio",
    tableNumber: 6,
    tableName: "Table 6 — Groomsmen & Best Man",
    role: "Groomsman",
    aliases: ["John Carlo Ederio", "JC Ederio", "John Carlo"],
  },
  {
    id: "g-51",
    name: "Mr. Melvin Velasco",
    tableNumber: 6,
    tableName: "Table 6 — Groomsmen & Best Man",
    role: "Groomsman",
    aliases: ["Melvin Velasco", "Melvin"],
  },
  {
    id: "g-52",
    name: "Mr. Kevin Aquino",
    tableNumber: 6,
    tableName: "Table 6 — Groomsmen & Best Man",
    role: "Groomsman",
    aliases: ["Kevin Aquino", "Kevin"],
  },
  {
    id: "g-53",
    name: "Mr. John Carlo Perillo",
    tableNumber: 6,
    tableName: "Table 6 — Groomsmen & Best Man",
    role: "Groomsman",
    aliases: ["John Carlo Perillo", "JC Perillo", "Carlo Perillo"],
  },

  // Bridesmaids (Table 5)
  {
    id: "g-54",
    name: "Ms. Danica Rose Aricayos",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Bridesmaid",
    aliases: ["Danica Rose Aricayos", "Danica Aricayos", "Danica Rose", "Danica"],
  },
  {
    id: "g-55",
    name: "Ms. Trisha Mae Lingad",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Bridesmaid",
    aliases: ["Trisha Mae Lingad", "Trisha Lingad", "Trisha"],
  },
  {
    id: "g-56",
    name: "Ms. Joan Battung",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Bridesmaid",
    aliases: ["Joan Battung", "Joan"],
  },
  {
    id: "g-57",
    name: "Ms. Alyssa Charlotte Lopez",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Bridesmaid",
    aliases: ["Alyssa Charlotte Lopez", "Alyssa Lopez", "Charlotte Lopez", "Alyssa"],
  },
  {
    id: "g-58",
    name: "Ms. Alpha Joy Fallesgon",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Bridesmaid",
    aliases: ["Alpha Joy Fallesgon", "Alpha Fallesgon", "Alpha Joy", "Alpha"],
  },
  {
    id: "g-59",
    name: "Ms. Stephanie Jane Gonzales",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Bridesmaid",
    aliases: ["Stephanie Jane Gonzales", "Stephanie Gonzales", "Steph Gonzales", "Stephanie"],
  },
  {
    id: "g-60",
    name: "Ms. Kyla Clavecillas",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Bridesmaid",
    aliases: ["Kyla Clavecillas", "Kyla"],
  },
  {
    id: "g-61",
    name: "Ms. Merapie Pacatan",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Bridesmaid",
    aliases: ["Merapie Pacatan", "Merapie"],
  },
  {
    id: "g-62",
    name: "Ms. Precious love Palaña",
    tableNumber: 5,
    tableName: "Table 5 — Bridal Entourage & Maid of Honor",
    role: "Bridesmaid",
    aliases: ["Precious love Palaña", "Precious Palana", "Precious Palaña", "Precious"],
  },

  // Bearers & Flower Girls (Table 10)
  {
    id: "g-63",
    name: "Mr. Gerome Xhandroe Matthew Palaña",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Ring Bearer",
    aliases: ["Gerome Matthew Palaña", "Gerome Palaña", "Xhandroe Matthew", "Gerome"],
  },
  {
    id: "g-64",
    name: "Ms. Psalm Silao",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Bible Bearer",
    aliases: ["Psalm Silao", "Psalm"],
  },
  {
    id: "g-65",
    name: "Ms. AG Carrina Aranas",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Coin Bearer",
    aliases: ["Carrina Aranas", "AG Aranas", "Carrina"],
  },
  {
    id: "g-66",
    name: "Mr. George Ethan Matthew Palana",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "White Aisle Runner",
    aliases: ["George Ethan Palana", "Ethan Palana", "George Palana"],
  },
  {
    id: "g-67",
    name: "Mr. Jabez James Mancio",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "White Aisle Runner",
    aliases: ["Jabez James Mancio", "Jabez Mancio", "Jabez"],
  },
  {
    id: "g-68",
    name: "Amari Isibeal Putan",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Flower Girl",
    aliases: ["Amari Putan", "Amari Isibeal", "Amari"],
  },
  {
    id: "g-69",
    name: "Samantha Abia Sabio",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Flower Girl",
    aliases: ["Samantha Sabio", "Samantha Abia", "Samantha", "Sam"],
  },
  {
    id: "g-70",
    name: "Gabby Adele Verdejo",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Flower Girl",
    aliases: ["Gabby Verdejo", "Gabby Adele", "Gabby"],
  },
  {
    id: "g-71",
    name: "Gaily Andrea Verdejo",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Flower Girl",
    aliases: ["Gaily Verdejo", "Gaily Andrea", "Gaily"],
  },
  {
    id: "g-72",
    name: "Athena Cithtrine Mendoza",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Flower Girl",
    aliases: ["Athena Mendoza", "Athena Cithtrine", "Athena"],
  },
  {
    id: "g-73",
    name: "Lasuli Eill David",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Flower Girl",
    aliases: ["Lasuli David", "Lasuli Eill", "Lasuli"],
  },
  {
    id: "g-74",
    name: "Zameerah Erich Rodriguez",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Flower Girl",
    aliases: ["Zameerah Rodriguez", "Zameerah Erich", "Zameerah"],
  },
  {
    id: "g-75",
    name: "Marchie Palaña",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Flower Girl",
    aliases: ["Marchie Palana", "Marchie Palaña", "Marchie"],
  },
  {
    id: "g-76",
    name: "Zatthu Jehiah Ernacio",
    tableNumber: 10,
    tableName: "Table 10 — Little Stars & Bearers Family",
    role: "Here Comes The Bride",
    aliases: ["Zatthu Ernacio", "Zatthu Jehiah", "Zatthu"],
  },
];

/**
 * Remove diacritics and special characters for fuzzy matching
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/**
 * Search guests with predictive matching across names, roles, and aliases
 */
export function searchGuests(query: string, maxResults = 8): GuestInfo[] {
  const cleanQuery = normalizeText(query);
  if (!cleanQuery) return [];

  const terms = cleanQuery.split(/\s+/).filter(Boolean);

  const scored = GUESTS.map((guest) => {
    const normName = normalizeText(guest.name);
    const normRole = normalizeText(guest.role || "");
    const normAliases = (guest.aliases || []).map(normalizeText);

    let score = 0;

    // Exact match gets highest score
    if (normName === cleanQuery) {
      score += 100;
    } else if (normName.startsWith(cleanQuery)) {
      score += 60;
    } else if (normName.includes(cleanQuery)) {
      score += 40;
    }

    // Check aliases
    for (const alias of normAliases) {
      if (alias === cleanQuery) score += 90;
      else if (alias.startsWith(cleanQuery)) score += 50;
      else if (alias.includes(cleanQuery)) score += 30;
    }

    // Check each sub-term
    const allText = `${normName} ${normRole} ${normAliases.join(" ")}`;
    const allTermsMatch = terms.every((term) => allText.includes(term));

    if (allTermsMatch) {
      score += 20 * terms.length;
    }

    // Check role match
    if (normRole.includes(cleanQuery)) {
      score += 15;
    }

    return { guest, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.guest.name.localeCompare(b.guest.name))
    .slice(0, maxResults)
    .map((item) => item.guest);
}

/**
 * Get other guests sitting at the same table (companions)
 */
export function getTableCompanions(tableNumber: number, excludeGuestId?: string): GuestInfo[] {
  return GUESTS.filter(
    (g) => g.tableNumber === tableNumber && g.id !== excludeGuestId
  );
}

/**
 * Get table info by number
 */
export function getTableInfo(tableNumber: number): TableInfo | undefined {
  return TABLES.find((t) => t.number === tableNumber);
}

/**
 * Get all tables with their assigned guests
 */
export function getAllTablesWithGuests(): Array<{ table: TableInfo; guests: GuestInfo[] }> {
  return TABLES.map((table) => ({
    table,
    guests: GUESTS.filter((g) => g.tableNumber === table.number),
  }));
}

