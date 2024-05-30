'use client'
import Link from "next/link"
import { HoverEffect } from './ui/card-hover-effect'

function Myservices() {
    const projects = [
        {
          s_no:"01",
          s_name:"Web design",
          s_desc:"Web development is the process of building, programming..."
      },
      {
          s_no:"02",
          s_name:"Graphics design",
          s_desc:"Web development is the process of building, programming..."
      },
      {
          s_no:"03",
          s_name:"Social media",
          s_desc:"Web development is the process of building, programming..."
      },
      {
          s_no:"04",
          s_name:"App design",
          s_desc:"Web development is the process of building, programming..."
      },
      {
          s_no:"05",
          s_name:"Digital marketing",
          s_desc:"Web development is the process of building, programming..."
      },
      {
          s_no:"06",
          s_name:"Content writing",
          s_desc:"Web development is the process of building, programming..."
      },
        ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
        <h2 className="text-2xl text-teal-600 font-semibold tracking-wide ">My services</h2>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={projects.map(project => (
            {
              title: project.s_name,
              description: project.s_desc,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All services
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Myservices