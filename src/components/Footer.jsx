

export function Footer() {
  return (
    <footer className="bg-white text-black w-full mt-16">
    <div className="flex w-full justify-end py-14 px-8">
         <p className="text-black text-4xl font-serif italic">Let's design your goals together!</p>
    </div>
    <div className="flex w-full justify-around py-8 ">
        <div className="flex flex-col gap-7 items-start">
            <h4 className="text-2xl">Primary</h4>
            <ul className="flex flex-col gap-4">
                <li className="">Home</li>
                <li className="">Work</li>
                <li className="">About</li>
                <li className="">Let's talk</li>
            </ul>
        </div>
        <div className="flex flex-col gap-7 items-start">
            <h4 className="text-2xl">Contact</h4>
            <ul className="flex flex-col gap-4">
                <li className="">LINKEDIN</li>
                <li className="">INSTAGRAM</li>
                <li className="">EMAIL</li>
            </ul>
        </div>
        <div className="flex flex-col gap-7 items-start">
            <div className="flex rounded-lg py-2.5 px-3 bg-blue-primary items-center gap-2.5 font-serif italic text-white font-bold uppercase text-2xl">
                <p className="">Let’s work together</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M5 13.75L5 16.25L20 16.25L20 18.75L22.5 18.75L22.5 16.25L25 16.25L25 13.75L22.5 13.75L22.5 11.25L20 11.25L20 13.75L5 13.75ZM17.5 8.75L20 8.75L20 11.25L17.5 11.25L17.5 8.75ZM17.5 8.75L15 8.75L15 6.25L17.5 6.25L17.5 8.75ZM17.5 21.25L20 21.25L20 18.75L17.5 18.75L17.5 21.25ZM17.5 21.25L15 21.25L15 23.75L17.5 23.75L17.5 21.25Z" fill="#1A1A1A"/>
                </svg>
            </div>
            <div className="flex rounded-lg border-2 py-2.5 px-3 border-blue-primary items-center gap-3 font-serif italic font-bold uppercase text-2xl">
                <p className="">Restricted Access</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                <path d="M11 0H5V2H3V6H0V20H16V6H13V2H11V0ZM11 2V6H5V2H11ZM5 8H14V18H2V8H5ZM9 11H7V15H9V11Z" fill="#0059FF"/>
                </svg>
            </div>
        </div>
    </div>
    <div className="py-16 flex justify-center overflow-hidden">
        <p className="shrink-0 text-[600px] leading-[300px] font-black">JEAN PAUGNAT</p>

    </div>
    <div className=" bg-black capitalize flex font-sans font-normal h-[42px] items-center justify-between  px-[51px] py-[8px] text-[14px] text-nowrap text-white ">
      <p className=" shrink-0">©JeanPaugnat</p>
      <p className=" shrink-0">All rights reserved</p>
    </div>
    </footer>
  );
}