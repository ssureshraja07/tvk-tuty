/* ------------------------------------------------------------------ */
/*  !! SAMPLE DATA !!                                                  */
/*  Everything below is placeholder content so the layout can be       */
/*  built. Replace with REAL placements / REAL job openings, then set  */
/*  the two flags to false (the "Sample data" badge disappears).       */
/*                                                                     */
/*  For real people: get their written consent before showing their    */
/*  photo and name on the site.                                        */
/*                                                                     */
/*  Photos go in /public/images/employment/ (a card shows a person     */
/*  icon if the file is missing). Newest first.                        */
/* ------------------------------------------------------------------ */

export const PLACED_ARE_SAMPLES = true;
export const JOBS_ARE_SAMPLES = true;

const img = (n) => `/images/employment/placed-${n}.jpg`;

export const PLACED = [
  { id: 1, name: "Karthik S.", role: "Store Assistant", company: "Local retail store", joinedOn: "2026-10-20", image: img(1) },
  { id: 2, name: "Priya M.", role: "Data Entry Operator", company: "Private office", joinedOn: "2026-10-16", image: img(2) },
  { id: 3, name: "Arun Kumar R.", role: "Delivery Executive", company: "Logistics firm", joinedOn: "2026-10-12", image: img(3) },
  { id: 4, name: "Divya L.", role: "Lab Assistant", company: "Private diagnostic lab", joinedOn: "2026-10-08", image: img(4) },
  { id: 5, name: "Mohamed Ismail", role: "Junior Technician", company: "Service centre", joinedOn: "2026-10-03", image: img(5) },
  { id: 6, name: "Selvi P.", role: "Customer Support Executive", company: "Call centre", joinedOn: "2026-09-28", image: img(6) },
  { id: 7, name: "Raja Pandian", role: "Warehouse Associate", company: "Port-area warehouse", joinedOn: "2026-09-24", image: img(7) },
  { id: 8, name: "Anitha K.", role: "Accounts Assistant", company: "Local trading firm", joinedOn: "2026-09-19", image: img(8) },
  { id: 9, name: "Vignesh T.", role: "Sales Executive", company: "Electronics showroom", joinedOn: "2026-09-14", image: img(9) },
  { id: 10, name: "Mary Jenifer", role: "Hospital Support Staff", company: "Private hospital", joinedOn: "2026-09-09", image: img(10) },
  { id: 11, name: "Balamurugan S.", role: "Electrician Helper", company: "Electrical contractor", joinedOn: "2026-09-03", image: img(11) },
  { id: 12, name: "Nandhini R.", role: "Packing Staff", company: "Food processing unit", joinedOn: "2026-08-28", image: img(12) },
  { id: 13, name: "Subash C.", role: "Driver", company: "Transport company", joinedOn: "2026-08-22", image: img(13) },
  { id: 14, name: "Kavitha D.", role: "Front Office Executive", company: "Private clinic", joinedOn: "2026-08-17", image: img(14) },
];

/* type: "full" | "part"  (add more types in the TYPE labels inside the page) */
export const JOBS = [
  { id: 1, title: "Store Assistant", company: "Local retail store", type: "full", qualification: "12th pass", location: "Thoothukudi", lastDate: "2026-11-20" },
  { id: 2, title: "Delivery Executive", company: "Logistics firm", type: "full", qualification: "10th pass + two-wheeler licence", location: "Thoothukudi", lastDate: "2026-11-15" },
  { id: 3, title: "Data Entry Operator", company: "Private office", type: "part", qualification: "Any degree", location: "Thoothukudi", lastDate: "2026-11-25" },
  { id: 4, title: "Lab Assistant", company: "Private diagnostic lab", type: "full", qualification: "DMLT / Diploma", location: "Thoothukudi", lastDate: "2026-12-05" },
  { id: 5, title: "Junior Technician", company: "Service centre", type: "full", qualification: "ITI", location: "Thoothukudi", lastDate: "2026-11-30" },
  { id: 6, title: "Customer Support Executive", company: "Call centre", type: "full", qualification: "Any degree, Tamil & English", location: "Thoothukudi", lastDate: "2026-12-10" },
];