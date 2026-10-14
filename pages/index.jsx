import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <section>
        <div className="container bg-blue-600 mx-auto">
          <header className="bg-[#FFFFFF] py-5 flex justify-between items-center">
            <div w-90 h-30>
            <img src="./img/logo.png" alt="logo_header"/>
            </div>
            
            <div className="flex items-center gap-16  text-green-500 md:gap-10">
               <Link href="#" className="text-[#7C8DB0] text-[16px] font-normal items-center sm:block hidden md:text-[20px]">
               Flights
               </Link>

               <Link href="#" className="text-[#7C8DB0] text-[16px] font-normal sm:block hidden md:text-[20px]">
               Hotels
               </Link>

               <Link href="#" className="text-[#7C8DB0] text-[16px] font-normal sm:block hidden md:text-[20px]">
               Packages
               </Link>

               <Link href="#" className="text-[#7C8DB0] text-[16px] font-normal sm:block hidden md:text-[20px]">
               Sign in
               </Link>

               <button className="bg-purple-500  w-[95] h-[48]  rounded-2xl">
                <Link href="#" className="text-[16px] font-bold text-gray-100">
                Sign up
                </Link>
               </button>
            </div>
          </header>

          <div className="flex justify-center items-center flex-col bg-amber-50 round py-2 gap-12">
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] text-fuchsia-700 font-bold">
           Its more than <br />
           just a trip 
           </h1>

            <div className="flex items-center w-[1200px] h-[48px] bg-amber-500 rounded-tr-sm border-2 border-solid border-b-gray-700 sm:w-[200px] md:w-[700px]">
            
              <select className="w-[324] h-[48] bg-fuchsia-100 rounded-b-none border-r-2 border-gray-500 outline-none">
              <option value="SFO">SFO</option>
              <option value="ATL">ATL</option>
              <option value="LAX">LAX</option>
              <option value="STL">STL</option>
              <option value="PVG">PVG</option>
              <option value="MSP">MSP</option>
              <option value="NRT">NRT</option>
            </select>
              
              <select className="w-[324] h-[48] bg-fuchsia-100 rounded-b-none border-r-2 border-gray-500 outline-none">
              <option value="SFO">SFO</option>
              <option value="ATL">ATL</option>
              <option value="LAX">LAX</option>
              <option value="STL">STL</option>
              <option value="PVG">PVG</option>
              <option value="MSP">MSP</option>
              <option value="NRT">NRT</option>
            </select>

            <select className="w-[324] h-[48] bg-fuchsia-100 rounded-b-none border-r-2 border-gray-500 outline-none">
              <option value="SFO">SFO</option>
              <option value="ATL">ATL</option>
              <option value="LAX">LAX</option>
              <option value="STL">STL</option>
              <option value="PVG">PVG</option>
              <option value="MSP">MSP</option>
              <option value="NRT">NRT</option>
            </select>
            

            <button className="w-[96] h-[48] bg-[#605DEC] rounded-[4]">
             <Link href="#" className="text-[#FAFAFA] text-[18px]">
             search
             </Link>
            </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto bg-emerald-400">
          <div className="flex flex-col gap-6 py-3 bg-white">
  
  <div className="flex items-center justify-between px-4">
    <p className="text-gray-600 font-mono text-[15px] sm:text-[13px] md:text-[20px] lg:text-[28px] xl:text-[32px]">
      Find your next adventure with these <span className="text-purple-600 sm:text=[13px]">flight deals</span>
    </p>
    
    <div className="flex items-center gap-1">
      <Link href="#" className="text-xl sm:text-2xl text-gray-300">All</Link>
      <div className="w-4 h-3.5">
        <img className="w-full h-full animate-bounce" src="./icons/ar.png" alt="arrow" />
      </div>
    </div>
  </div>
   
 
  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 px-4 flex-wrap">
    
  
    <div className="w-full sm:w-[240px] md:w-[280px] lg:w-[330px]  rounded-2xl overflow-hidden shadow-md">
      <div className="w-full h-[300px] sm:h-[350px] lg:h-[397px]">
        <img className="rounded-2xl w-full h-full object-cover" src="./img/tm.png" alt="The Bund, Shanghai" />
      </div>
      
      <div className="p-3 flex flex-col bg-white">
        <div className="flex items-center justify-between">
          <p className="text-[16px] sm:text-[18px] font-medium text-[#6E7491]">The Bund, Shanghai</p>
          <p className="text-[16px] sm:text-[18px] font-semibold text-[#6E7491]">598$</p>
        </div>
        <p className="text-[14px] sm:text-[15px] text-[#7C8DB0]">China’s most international city</p>
      </div>
    </div>

    
    <div className="w-full sm:w-[240px] md:w-[280px] lg:w-[330px]  rounded-2xl overflow-hidden shadow-md">
      <div className="w-full h-[300px] sm:h-[350px] lg:h-[397px] ">
        <img className="rounded-2xl w-full h-full object-cover" src="./img/tm.png" alt="The Bund, Shanghai" />
      </div>
      
      <div className="p-3 flex flex-col bg-white">
        <div className="flex items-center justify-between">
          <p className="text-[16px] sm:text-[18px] font-medium text-[#6E7491]">The Bund, Shanghai</p>
          <p className="text-[16px] sm:text-[18px] font-semibold text-[#6E7491]">598$</p>
        </div>
        <p className="text-[14px] sm:text-[15px] text-[#7C8DB0]">China’s most international city</p>
      </div>
    </div>

    
    <div className="w-full sm:w-[240px] md:w-[280px] lg:w-[330px]  rounded-2xl overflow-hidden shadow-md">
      <div className="w-full h-[300px] sm:h-[350px] lg:h-[397px] ">
        <img className="rounded-2xl w-full h-full object-cover" src="./img/tm.png" alt="The Bund, Shanghai" />
      </div>
      
      <div className="p-3 flex flex-col bg-white">
        <div className="flex items-center justify-between">
          <p className="text-[16px] sm:text-[18px] font-medium text-[#6E7491]">The Bund, Shanghai</p>
          <p className="text-[16px] sm:text-[18px] font-semibold text-[#6E7491]">598$</p>
        </div>
        <p className="text-[14px] sm:text-[15px] text-[#7C8DB0]">China’s most international city</p>
      </div>
    </div>

  </div>
</div>
        </div>
      </section>


      <section>
        <div className="container mx-auto">
          <div className="bg-white py-5 flex justify-center items-center flex-col sm:p-3">
           
           <div className="w-full h-64 sm:h-80 lg:h-96 bg-blue-950 rounded-2xl overflow-hidden">
         <img className="w-full h-full object-cover rounded-2xl" src="./img/forest.png" alt="forest" />
         </div>

           <div className="p-3.5">
           
           <div className="flex items-center justify-between">
            <p className="text-[18px] font-libre text-gray-600">Tsavo East National Park, Kenya</p>

            <p className="text-[18px] font-ropoto text-gray-600">$1,248</p>
           </div>
             
             <p className="text-gray-400 font-sans text-[16px] lg:text-[14px] md:text-[10px]">Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.</p>
           </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
        
        <div className="flex flex-col justify-center items-center p-2 bg-white gap-10">
        
        <div className="flex items-center justify-between">
         <p className="font-Nunito text-gray-600 text-2xl">
          Explore unique <span className="font-Nunito text-blue-400">places to stay</span>
          </p>

          <div className="flex items-center gap-1">
           <Link href="#" className="text-xl sm:text-2xl text-gray-300">All</Link>

           <div className="w-4 h-3.5">
        <img className="w-full h-full animate-bounce" src="./icons/ar.png" alt="arrow" />
      </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  
 
  <div className="w-full  rounded-t-2xl">
    <div className="top_im">
      <img className="w-full h-80 bg-blue-950 object-cover rounded-t-2xl" src="./img/tm2.png" alt="" />
    </div>

    <div className="p-4 flex flex-col">
      <p className="font-Nunito text-sm text-gray-600">
        Stay among the atolls in <span className="text-blue-400">Maldives</span>
      </p>

      <p className="font-Nunito text-xs sm:text-sm lg:text-base">
        From the 2nd century AD, the islands were known <br />
        as the 'Money Isles' due to the abundance of <br />
        cowry shells, a currency of the early ages.
      </p>
    </div>
  </div>

   <div className="w-full  rounded-t-2xl">
    <div className="top_im">
      <img className="w-full h-80 bg-blue-950 object-cover rounded-t-2xl" src="./img/tm2.png" alt="" />
    </div>

    <div className="p-4 flex flex-col">
      <p className="font-Nunito text-sm text-gray-600">
        Stay among the atolls in <span className="text-blue-400">Maldives</span>
      </p>

      <p className="font-Nunito text-xs sm:text-sm lg:text-base">
        From the 2nd century AD, the islands were known <br />
        as the 'Money Isles' due to the abundance of <br />
        cowry shells, a currency of the early ages.
      </p>
    </div>
  </div>

   <div className="w-full  rounded-t-2xl">
    <div className="top_im">
      <img className="w-full h-80 bg-blue-950 object-cover rounded-t-2xl" src="./img/tm2.png" alt="" />
    </div>

    <div className="p-4 flex flex-col">
      <p className="font-Nunito text-sm text-gray-600">
        Stay among the atolls in <span className="text-blue-400">Maldives</span>
      </p>

      <p className="font-Nunito text-xs sm:text-sm lg:text-base">
        From the 2nd century AD, the islands were known <br />
        as the 'Money Isles' due to the abundance of <br />
        cowry shells, a currency of the early ages.
      </p>
    </div>
  </div> 

</div>
          
          <button className="w-48 h-12 bg-purple-500 rounded">
           <Link href="#" className="font-BodoniModa text-sm text-gray-100">
           Explore more stays
           </Link>
          </button>
        </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">

        <div className="flex flex-col justify-center items-center gap-6 py-3.5 bg-white text-gray-600">
           <p className="font-Nunito text-2xl">What Tripma users are saying</p>

           <div className="grid grid-cols-1 min-[576px]:grid-cols-2 lg:grid-cols-3 gap-10">
             
             <div className="p-2  flex flex-col gap-5">
               <div className="flex items-center gap-4">
               <div className="w-12 h-12">
              <img className="w-full h-full rounded-full border-bs-indigo-950" src="./img/user.png" alt="user" />
               </div>

             <div>
                <p className="font-Nunito text-gray-600 font-bold sm:text-xs">
                    Yifei Chen
               </p>

               <p className="font-Nunito text-lg sm:text-xs">Seoul, South Korea | April 2019</p>
             </div>

               </div>

               <p className="font-BodoniModa sm:text-xs">
              What a great experience using Tripma! <br />
              I booked all of my flights for my gap <br />
              year through Tripma and never had <br />
              any issues. When I had to cancel a  <br />
              flight because of an emergency, <br />
              Tripma support helped me read more...
             </p>

             </div>

              <div className="p-2  flex flex-col gap-5">
               <div className="flex items-center gap-4">
               <div className="w-12 h-12">
              <img className="w-full h-full rounded-full border-bs-indigo-950" src="./img/user.png" alt="user" />
               </div>

             <div>
                <p className="font-Nunito text-gray-600 font-bold sm:text-xs">
                    Yifei Chen
               </p>

               <p className="font-Nunito text-lg sm:text-xs">Seoul, South Korea | April 2019</p>
             </div>

               </div>

               <p className="font-BodoniModa sm:text-xs">
              What a great experience using Tripma! <br />
              I booked all of my flights for my gap <br />
              year through Tripma and never had <br />
              any issues. When I had to cancel a  <br />
              flight because of an emergency, <br />
              Tripma support helped me read more...
             </p>

             </div>

              <div className="p-2  flex flex-col gap-5">
               <div className="flex items-center gap-4">
               <div className="w-12 h-12">
              <img className="w-full h-full rounded-full border-bs-indigo-950" src="./img/user.png" alt="user" />
               </div>

             <div>
                <p className="font-Nunito text-gray-600 font-bold sm:text-xs">
                    Yifei Chen
               </p>

               <p className="font-Nunito text-lg sm:text-xs">Seoul, South Korea | April 2019</p>
             </div>

               </div>

               <p className="font-BodoniModa sm:text-xs">
              What a great experience using Tripma! <br />
              I booked all of my flights for my gap <br />
              year through Tripma and never had <br />
              any issues. When I had to cancel a  <br />
              flight because of an emergency, <br />
              Tripma support helped me read more...
             </p>

             </div>
           </div>
        </div>
        </div>
      </section>

      <section>
        <div className="mx-auto">

          <footer className="flex flex-col justify-center items-center  bg-whit">
          <div className="flex gap-16 py-3 max-[768px]:flex-wrap  min-[576px]: lg:gap-8 xl:gap-1.5 md:gap-2.5 min-[576px]:p-2 min-[375px]:p-2">
            <div className="w-28 h-8 w- md:hidden max-[576px]:hidden max-[768px]:hidden">
            <img src="./img/logo.png" alt="footer logo" />
            </div>

            <div className="flex flex-col gap-3">
               <p className="font-bold font-Nunito text-lg text-gray-600">About</p>

               <ul className="flex flex-col gap-1.5">
                <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 About Tripma
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 How it works
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Careers
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Press
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Blog
                 </Link>
                </li>

                <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Forum
                 </Link>
                </li>
               </ul>
            </div>

             <div className="flex flex-col gap-3">
               <p className="font-bold font-Nunito text-lg text-gray-600">Partner with us</p>

               <ul className="flex flex-col gap-1.5">
                <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Partnership programs
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Affiliate program
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Connectivity partners
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Promotions and events
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Integrations
                 </Link>
                </li>

                <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Community
                 </Link>
                </li>

                <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Loyalty program
                 </Link>
                </li>
               </ul>
            </div>

            <div className="flex flex-col gap-3">
               <p className="font-bold font-Nunito text-lg text-gray-600">Support</p>

               <ul className="flex flex-col gap-1.5">
                <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Help Center
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Contact us
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Privacy policy
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                  Terms of service
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Trust and safety
                 </Link>
                </li>

                <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Accessibility
                 </Link>
                </li>
               </ul>
            </div>
             
              <div className="flex flex-col gap-3">
               <p className="font-bold font-Nunito text-lg text-gray-600">Get the app</p>

               <ul className="flex flex-col gap-1.5">
                <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Tripma for Android
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Tripma for iOS
                 </Link>
                </li>

                 <li>
                 <Link href="#" className="text-gray-400 font-Nunito text-lg font-normal md:text-sm">
                 Mobile site
                 </Link>
                </li>
               </ul>

               <div className="flex flex-col gap-2">
                <Link href="#" className="w-36 h-10 bg-black rounded flex items-center justify-center gap-2.5 border-2 border-gray-500">
                     <div className="w-4 h-4">
                        <img src="./img/apple.png" alt="apple" />
                     </div>

                    <div>
                      <p className="text-white text-xs">Download on the</p>
                      <p className="text-white">App Store</p>
                    </div>
                </Link>

                <Link href="#" className="w-36 h-10  rounded flex justify-center items-center gap-2.5">
                  <div className="w-36 h-10">
                        <img src="./img/play.png" alt="apple" />
                    </div>
                </Link>
               </div>
            </div>

          </div>

          <div className="w-full h-0.5 bg-gray-200"></div>
          {/* btm */}
          <div className="flex  items-center gap-32 py-2.5">
           
           <div className="flex items-center gap-5">
            
            <div className="w-6 h-6">
                <img src="./img/twitter.png" alt="twitter" />
            </div>

            <div className="w-6 h-6">
                <img src="./img/instagram.png" alt="instagram" />
            </div>

            <div className="w-6 h-6">
                <img src="./img/facebook.png" alt="facebook" />
            </div>
           </div>
          
          <p>© 2020 Tripma incorporated</p>
          </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
