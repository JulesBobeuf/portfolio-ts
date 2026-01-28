export type CareerItem = {
  side: "left" | "right";
  title: string;
  place: string;
  start: string; // YYYY-MM
  end: string | "present";
  description: string;
};

export const career: CareerItem[] = [
  {
    side: "right",
    title: "Apprenticeship – Java Developer",
    place: "IBM",
    start: "2023-09",
    end: "2026-08",
    description: "Java, Spring Boot, Maven, Podman, AWS.",
  },
  {
    side: "left",
    title: "Master in Software Engineering",
    place: "University of Opal Coast",
    start: "2024-09",
    end: "2026-07",
    description: "Backend Engineering, Application Architecture",
  },
  {
    side: "right",
    title: "Internship – Python Developer",
    place: "Luminess",
    start: "2023-04",
    end: "2023-06",
    description: "Python, Django, Bootstrap, LaTeX.",
  },
  {
    side: "left",
    title: "Bachelor in Computer Science",
    place: "IUT of Lens",
    start: "2021-09",
    end: "2024-06",
    description: "Algorithms, Databases, Web development.",
  },
];
