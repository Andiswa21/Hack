export const userMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: "fa-solid fa-list",
  },
  {
    name: "Apply Caregiver",
    path: "/apply-doctor",
    icon: "fa-solid fa-solid fa-receipt",
  },
  {
    name: "Profile",
    path: "/doctor/profile/${user?._id}",
    icon: "fa-solid fa-user",
  },
];

// admin menu
export const adminMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },

  {
    name: "Caregivers",
    path: "/admin/doctors",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: "fa-solid fa-user",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
];
