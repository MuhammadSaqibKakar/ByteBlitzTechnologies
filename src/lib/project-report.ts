export type ReportProject = {
  name: string;
  cost: string;
  details: string[];
};

export type ReportDistrict = {
  name: string;
  projects: ReportProject[];
};

export type ReportDivision = {
  name: string;
  districts: ReportDistrict[];
};

export const projectReport: ReportDivision[] = [
  {
    name: "Kalat Division",
    districts: [
      {
        name: "Khuzdar District",
        projects: [
          {
            name: "NGO Website",
            cost: "PKR 40,000+",
            details: [
              "Organization profile pages",
              "Projects and impact sections",
              "Donation or contact call-to-action",
              "Mobile responsive layout",
              "SEO-ready page structure",
            ],
          },
          {
            name: "Office Management System",
            cost: "Custom quote",
            details: [
              "Staff and department records",
              "Daily office task tracking",
              "Admin panel access",
              "Reports and summaries",
              "Role-based workflow support",
            ],
          },
          {
            name: "Social Media Brand Setup",
            cost: "PKR 12,000+",
            details: [
              "Facebook page setup",
              "Instagram business profile",
              "Profile and cover designs",
              "Post templates",
              "Basic content direction",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Makran Division",
    districts: [
      {
        name: "Gwadar District",
        projects: [
          {
            name: "Business Landing Page",
            cost: "PKR 25,000+",
            details: [
              "Modern one-page website",
              "WhatsApp order buttons",
              "Service highlights",
              "Fast loading layout",
              "Mobile-first design",
            ],
          },
          {
            name: "Inventory Dashboard",
            cost: "PKR 55,000+",
            details: [
              "Product stock overview",
              "Low stock alerts",
              "Sales summary cards",
              "Charts and filters",
              "Admin access panel",
            ],
          },
          {
            name: "Restaurant POS System",
            cost: "PKR 20,000+",
            details: [
              "Billing and invoice printing",
              "Menu item management",
              "Daily sales report",
              "Offline usage support",
              "Simple cashier interface",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Quetta Division",
    districts: [
      {
        name: "Pishin District",
        projects: [
          {
            name: "Mobile Business App",
            cost: "PKR 80,000+",
            details: [
              "Android app interface",
              "Business profile pages",
              "Contact and order actions",
              "Push-ready structure",
              "Scalable feature modules",
            ],
          },
          {
            name: "School Website",
            cost: "PKR 45,000+",
            details: [
              "Home, about, admissions, and contact pages",
              "Class or department information",
              "Notice and announcement section",
              "Mobile responsive design",
              "Professional school branding",
            ],
          },
        ],
      },
      {
        name: "Quetta District",
        projects: [
          {
            name: "Branding Design Kit",
            cost: "PKR 15,000+",
            details: [
              "Logo concept",
              "Color and typography direction",
              "Social media post templates",
              "Business profile visuals",
              "Export-ready design files",
            ],
          },
          {
            name: "Business Website",
            cost: "PKR 35,000+",
            details: [
              "Professional company homepage",
              "Services and contact sections",
              "WhatsApp inquiry buttons",
              "SEO-friendly content structure",
              "Fully responsive layout",
            ],
          },
          {
            name: "POS System",
            cost: "PKR 20,000+",
            details: [
              "Online and offline billing",
              "Inventory management",
              "Customer records",
              "Sales reports",
              "User-friendly dashboard",
            ],
          },
          {
            name: "Project Tracking Dashboard",
            cost: "PKR 60,000+",
            details: [
              "Project status cards",
              "Progress tracking",
              "Charts and analytics",
              "Team task overview",
              "Export-ready reports",
            ],
          },
        ],
      },
    ],
  },
];

export function getSortedProjectReport() {
  return projectReport
    .map((division) => ({
      ...division,
      districts: division.districts
        .map((district) => ({
          ...district,
          projects: [...district.projects].sort((a, b) =>
            a.name.localeCompare(b.name),
          ),
        }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getProjectReportTotals(report = getSortedProjectReport()) {
  const districtCount = report.reduce(
    (total, division) => total + division.districts.length,
    0,
  );
  const projectCount = report.reduce(
    (total, division) =>
      total +
      division.districts.reduce(
        (districtTotal, district) => districtTotal + district.projects.length,
        0,
      ),
    0,
  );

  return {
    divisionCount: report.length,
    districtCount,
    projectCount,
  };
}
