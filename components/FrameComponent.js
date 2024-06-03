

const FrameComponent = () => {
  return (
    <div
      className={"w-[1059px] h-[210px] flex flex-row items-start justify-start gap-[65px] text-left text-base text-black font-abeezee "}
    >
      <div className="h-[118px] w-[141px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border text-8xs-2 text-gray-300">
        <div className="w-[141px] h-[108px] flex flex-col items-start justify-start gap-[35px]">
          <div className="w-[85px] h-[5px] flex flex-row items-start justify-start py-0 pr-0 pl-[76px] box-border">
            <div className="h-[5px] w-[9px] relative font-medium inline-block shrink-0 z-[8]">
              TM
            </div>
          </div>
          <div className="w-[141px] h-[68px] flex flex-col items-start justify-start gap-[16px] text-base text-black">
            <div className="w-[140px] h-[26px] relative leading-[26px] capitalize font-medium inline-block z-[8] cursor-pointer">
              help@frybix.com
            </div>
            <div className="w-[141px] h-[26px] relative leading-[26px] capitalize font-medium inline-block z-[8]">
              +1 234 456 678 89
            </div>
          </div>
        </div>
      </div>
      <div className="h-[210px] w-[82px] flex flex-col items-start justify-start gap-[16px]">
        <div className="w-[82px] h-[42px] relative text-13xl leading-[42px] capitalize font-medium text-center inline-block z-[8]">
          links
        </div>
        <div className="w-[50px] h-[26px] flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border">
          <div className="h-[26px] w-[47px] relative leading-[26px] capitalize font-medium inline-block z-[8] cursor-pointer">
            home
          </div>
        </div>
        <div className="w-[75px] h-[26px] flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border cursor-pointer">
          <div className="h-[26px] w-[72px] relative leading-[26px] capitalize font-medium inline-block z-[8]">
            about us
          </div>
        </div>
        <div className="w-[75px] h-[26px] flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border">
          <div className="h-[26px] w-[72px] relative leading-[26px] capitalize font-medium inline-block z-[8] cursor-pointer">
            bookings
          </div>
        </div>
        <div className="w-[37px] h-[26px] flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border">
          <div className="h-[26px] w-[34px] relative leading-[26px] capitalize font-medium inline-block z-[8] cursor-pointer">
            blog
          </div>
        </div>
      </div>
      <div className="h-[168px] w-[108px] flex flex-col items-start justify-start gap-[16px]">
        <div className="w-[83px] h-[42px] relative text-13xl leading-[42px] capitalize font-medium inline-block z-[8]">
          legal
        </div>
        <div className="w-[106px] h-[26px] relative leading-[26px] capitalize font-medium inline-block z-[8] cursor-pointer">
          terms of use
        </div>
        <div className="w-[108px] h-[26px] relative leading-[26px] capitalize font-medium inline-block z-[8] cursor-pointer">
          privacy policy
        </div>
        <div className="w-[102px] h-[26px] relative leading-[26px] capitalize font-medium inline-block z-[8] cursor-pointer">
          cookie policy
        </div>
      </div>
      <div className="h-[168px] w-32 flex flex-col items-start justify-start gap-[16px]">
        <div className="w-32 h-[42px] relative text-13xl leading-[42px] capitalize font-medium inline-block z-[8]">
          product
        </div>
        <div className="w-20 h-[26px] relative leading-[26px] cursor-pointer capitalize font-medium inline-block z-[8]">
          take tour
        </div>
        <div className="w-[72px] h-[26px] cursor-pointer relative leading-[26px] capitalize font-medium inline-block z-[8]">
          live chat
        </div>
        <div className="w-[66px] h-[26px] cursor-pointer relative leading-[26px] capitalize font-medium inline-block z-[8]">
          reveiws
        </div>
      </div>
      <div className="h-[181px] w-[340px] flex flex-col items-start justify-start gap-[16px]">
        <div className="w-[173px] h-[42px] relative text-13xl leading-[42px] capitalize font-medium inline-block z-[8]">
          Newsletter
        </div>
        <div className="w-[122px] cursor-pointer h-[26px] relative leading-[26px] capitalize font-medium inline-block z-[8]">
          Stay up to date
        </div>
        <div className="w-[340px] h-[81px] shadow-[-13px_13px_104.09px_rgba(161,_161,_161,_0.1)] rounded bg-white flex flex-row items-start justify-start py-2.5 pr-2.5 pl-6 box-border gap-[63px] z-[8] text-gray-200">
          <div className="w-[340px] relative shadow-[-13px_13px_104.09px_rgba(161,_161,_161,_0.1)] rounded bg-white h-[81px] hidden" />
          <div className="h-11 w-[83px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
            <input placeholder="Your Email" className="w-[83px] h-[26px] relative leading-[26px] font-medium inline-block z-[1] outline-0"></input>
          </div>
          <div className="h-[61px] w-40 rounded bg-black flex flex-row items-start justify-start pt-[18px] px-10 pb-[17px] box-border z-[1] text-white">
            <div className="w-40 relative rounded bg-black h-[61px] hidden" />
            <div className="h-[26px] w-20 cursor-pointer relative leading-[26px] capitalize font-medium inline-block z-[1]">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
