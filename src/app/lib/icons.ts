import { Asterisk, Book, Briefcase, House } from "lucide-react";

export const icons = [
  {
    id: 1,
    title: "House",
    value: "house",
    icon: House,
    color: "bg-lime-100",
  },
  {
    id: 2,
    title: "Work",
    value: "briefcase",
    icon: Briefcase,
    color: "bg-red-100",
  },
  {
    id: 3,
    title: "Study",
    value: "book",
    color: "bg-sky-100",
    icon: Book,
  },
  {
    id: 4,
    title: "Other",
    value: "asterisk",
    color: "bg-yellow-100",
    icon: Asterisk,
  },
];
