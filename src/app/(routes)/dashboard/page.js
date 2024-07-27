"use client";
import Head from 'next/head'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleCourseClick = (courseId) => {
    router.push(`/CoursePage`);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>WiseLearn Dashboard</title>
      </Head>
      <div className="flex text-black">
        {/* Sidebar */}
        <div className="w-1/4 bg-black text-white p-6 h-screen">
          <h1 className="text-2xl font-bold mb-6">Unified Learning Platform</h1>
          <nav>
            <ul>
              <li className="mb-4"><a href="#" className="text-white">Home</a></li>
              <li className="mb-4"><a href="#" className="text-gray-400">Explore Courses</a></li>
              <li className="mb-4"><a href="#" className="text-gray-400">My Courses</a></li>
              <li className="mb-4"><a href="#" className="text-gray-400">Claimed Certificates</a></li>
              <li className="mb-4"><a href="#" className="text-gray-400">Community</a></li>
              <li className="mb-4"><a href="#" className="text-gray-400">Wise Events</a></li>
              <li className="mb-4"><a href="#" className="text-gray-400">Learning Resources</a></li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <header className="flex justify-between items-center mb-6">
            <div className="flex-1">
              <input type="text" placeholder="Search Course Or Community" className="w-full p-2 border border-gray-300 rounded-xl" />
            </div>
            <div className="flex items-center ml-4">
              <span className="mr-4">6 Active Courses</span>
              <span className="mr-4">3 Finished Courses</span>
            </div>
          </header>

          <main>
            <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-xl">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr onClick={() => handleCourseClick('ux')}>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center cursor-pointer">
                     
                      Implementing UX in Your Product
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="bg-orange-200 text-orange-800 py-1 px-3 rounded-full text-xs">In Progress</span>
                    </td>
                  </tr>
                  <tr onClick={() => handleCourseClick('research')}>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center cursor-pointer">
                     
                      Post-Design Research
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="bg-orange-200 text-orange-800 py-1 px-3 rounded-full text-xs">In Progress</span>
                    </td>
                  </tr>
                  <tr onClick={() => handleCourseClick('figma')}>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center cursor-pointer">
                     
                      Figma Mastery
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">Completed</span>
                    </td>
                  </tr>
                  <tr onClick={() => handleCourseClick('framer')}>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center cursor-pointer">
                     
                      Framer Exclusive Course
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">Completed</span>
                    </td>
                  </tr>
                  <tr onClick={() => handleCourseClick('terminology')}>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center cursor-pointer">
                    
                      Terminology UX
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">Completed</span>
                    </td>
                  </tr>
                  <tr onClick={() => handleCourseClick('blender')}>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center cursor-pointer">
                     
                      Blender 3D Fundamentals
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="bg-orange-200 text-orange-800 py-1 px-3 rounded-full text-xs">In Progress</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
