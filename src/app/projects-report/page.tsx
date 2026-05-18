import type { Metadata } from "next";
import { BrandMark } from "@/components/BrandMark";
import {
  ProjectReportAutoPrint,
  ProjectReportPrintButton,
} from "@/components/ProjectReportAutoPrint";
import {
  getProjectReportTotals,
  getSortedProjectReport,
} from "@/lib/project-report";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Printable Projects Report",
  description:
    "Printable A to Z project report grouped by division and district.",
};

export default function ProjectsReportPage() {
  const report = getSortedProjectReport();
  const totals = getProjectReportTotals(report);
  let serial = 1;

  return (
    <main className="print-report-page bg-[#F5F7FB] px-4 py-8 text-[#071B3A] sm:px-6 lg:px-8">
      <ProjectReportAutoPrint />

      <div className="screen-only mx-auto mb-5 flex max-w-5xl items-center justify-between gap-3 rounded-xl border border-[#071B3A]/10 bg-white p-3 shadow-sm">
        <div>
          <p className="text-sm font-black">Project print report</p>
          <p className="text-xs font-semibold text-[#071B3A]/60">
            Sorted A to Z by division, district, and project name.
          </p>
        </div>
        <ProjectReportPrintButton className="button-pro inline-flex items-center gap-2 rounded-full bg-[#FF6A00] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#FF6A00]/20" />
      </div>

      <section className="report-sheet report-cover mx-auto max-w-5xl rounded-2xl border border-[#071B3A]/10 bg-white p-10 shadow-xl shadow-[#071B3A]/8">
        <div className="flex items-center gap-4">
          <BrandMark imageClassName="h-12 w-12" />
          <div>
            <p className="text-2xl font-black">{site.name}</p>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF6A00]">
              Projects Report
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#007BFF]">
            A to Z sequence
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Division, District, and Project List
          </h1>
          <p className="mt-5 text-base leading-8 text-[#071B3A]/70">
            This print-ready file lists projects in alphabetical order by
            division first, then district, then project name. Each project row
            includes serial number, name, cost, and key details.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-[#F5F7FB] p-5">
            <p className="text-3xl font-black">{totals.divisionCount}</p>
            <p className="text-sm font-bold text-[#071B3A]/60">Divisions</p>
          </div>
          <div className="rounded-xl bg-[#F5F7FB] p-5">
            <p className="text-3xl font-black">{totals.districtCount}</p>
            <p className="text-sm font-bold text-[#071B3A]/60">Districts</p>
          </div>
          <div className="rounded-xl bg-[#F5F7FB] p-5">
            <p className="text-3xl font-black">{totals.projectCount}</p>
            <p className="text-sm font-bold text-[#071B3A]/60">Projects</p>
          </div>
        </div>
      </section>

      {report.map((division) => (
        <div key={division.name}>
          <section className="report-sheet division-cover mx-auto mt-8 max-w-5xl rounded-2xl border border-[#071B3A]/10 bg-white p-10 shadow-xl shadow-[#071B3A]/8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF6A00]">
              Division Cover Page
            </p>
            <h2 className="mt-4 text-4xl font-black">{division.name}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#071B3A]/70">
              Districts and projects under this division are printed next in
              alphabetical sequence.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-[#F5F7FB] p-5">
                <p className="text-3xl font-black">
                  {division.districts.length}
                </p>
                <p className="text-sm font-bold text-[#071B3A]/60">Districts</p>
              </div>
              <div className="rounded-xl bg-[#F5F7FB] p-5">
                <p className="text-3xl font-black">
                  {division.districts.reduce(
                    (total, district) => total + district.projects.length,
                    0,
                  )}
                </p>
                <p className="text-sm font-bold text-[#071B3A]/60">Projects</p>
              </div>
            </div>
          </section>

          {division.districts.map((district) => (
            <div key={`${division.name}-${district.name}`}>
              <section className="report-sheet district-cover mx-auto mt-8 max-w-5xl rounded-2xl border border-[#071B3A]/10 bg-white p-10 shadow-xl shadow-[#071B3A]/8">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#007BFF]">
                  District Cover Page
                </p>
                <h3 className="mt-4 text-4xl font-black">{district.name}</h3>
                <p className="mt-3 text-lg font-bold text-[#071B3A]/70">
                  {division.name}
                </p>
                <p className="mt-8 inline-flex rounded-full bg-[#FF6A00]/10 px-5 py-3 text-sm font-black text-[#FF6A00]">
                  {district.projects.length} projects available
                </p>
              </section>

              <section className="report-sheet mx-auto mt-8 max-w-5xl rounded-2xl border border-[#071B3A]/10 bg-white p-6 shadow-xl shadow-[#071B3A]/8 sm:p-8">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF6A00]">
                      Project List
                    </p>
                    <h4 className="mt-2 text-2xl font-black">
                      {district.name}
                    </h4>
                  </div>
                  <p className="rounded-full bg-[#F5F7FB] px-4 py-2 text-xs font-black text-[#071B3A]/65">
                    Sorted A to Z
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="project-table w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-[#071B3A] text-white">
                        <th className="w-16 border border-[#071B3A]/15 px-3 py-3">
                          S.No
                        </th>
                        <th className="min-w-48 border border-[#071B3A]/15 px-3 py-3">
                          Project Name
                        </th>
                        <th className="w-36 border border-[#071B3A]/15 px-3 py-3">
                          Cost
                        </th>
                        <th className="min-w-80 border border-[#071B3A]/15 px-3 py-3">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {district.projects.map((project) => (
                        <tr key={project.name} className="print-row align-top">
                          <td className="border border-[#071B3A]/15 px-3 py-4 font-black">
                            {serial++}
                          </td>
                          <td className="border border-[#071B3A]/15 px-3 py-4 font-black">
                            {project.name}
                          </td>
                          <td className="border border-[#071B3A]/15 px-3 py-4 font-bold text-[#FF6A00]">
                            {project.cost}
                          </td>
                          <td className="border border-[#071B3A]/15 px-3 py-4">
                            <ul className="grid gap-1.5">
                              {project.details.slice(0, 5).map((detail) => (
                                <li
                                  key={detail}
                                  className="flex gap-2 leading-6 text-[#071B3A]/75"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00AEEF]" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}
