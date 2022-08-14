import { getToolbelt, Status, Tool } from "./toolbelt";

export const enum MetStatus {
  PENDING,
  PLANNED,
  MET,
}

type SocMed =
  | "twitter"
  | "github"
  | "linkedin"
  | "facebook"
  | "behance"
  | "instagram";

interface PersonWishlist {
  name: string;
  socMed: {
    [key in SocMed]?: string;
  };
  status: MetStatus;
  proof?: string;
}

interface CourseWishlist {
  name: string;
  url?: string;
  status: Status;
}

type MyWishlist = {
  tools: Tool[];
  people: PersonWishlist[];
  courses: CourseWishlist[];
};

const myWishlist: MyWishlist = {
  tools: getToolbelt({
    filterOptions: {
      status: [
        Status.NOT_STARTED,
        Status.ONGOING,
        Status.HIATUS,
        Status.ABORTED,
      ],
    },
  }),
  people: [
    {
      name: "Fajar Siddiq",
      status: MetStatus.PENDING,
      socMed: {
        twitter: "https://twitter.com/fajarsiddiqFS",
      },
    },
  ],
  courses: [],
};

export const getSkillWishlist = () => {
  return myWishlist.tools;
};

export const getPeopleWishlist = () => {
  return myWishlist.people;
};

export const getCoursesWishlist = () => {
  return myWishlist.courses;
};
