import Head from 'next/head';
import VideoPlayer from './_components/VideoPlayer';
import CourseDetails from './_components/CourseDetails';
import FAQ from './_components/FAQ';
import Sidebar from './_components/Sidebar';


export default function CoursePage() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-end p-10">
      <Head>
        <title>Blender 3D Fundamentals</title>
      </Head>
      <div className="bg-gray-50 p-10  rounded-2xl shadow-lg w-full max-w-7xl">
        <div className=" rounded-2xl grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3">
            <VideoPlayer />
            <CourseDetails />
            <div className='mt-6'>
              <FAQ />
            </div>
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
