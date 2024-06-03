

const FrameComponent2 = () => {
  return (
    <div
      className={`h-[741px] w-[638px] flex flex-col items-start justify-start pt-0 px-0 pb-[449px] box-border gap-[24px] text-left text-lg text-black font-abeezee`}
    >
      <b className="w-[618px] h-32 relative text-45xl leading-[64px] capitalize inline-block font-archivo-black z-[8]">
        make the best financial decisions
      </b>
      <div className="w-[638px] h-14 relative leading-[28px] capitalize font-medium text-gray-500 inline-block z-[8]">
        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
      </div>
      <div className="w-[374px] h-[60px] flex flex-row items-start justify-start gap-[83px] text-white">
        <div className="h-[60px] w-[180px] rounded bg-black flex flex-row items-start justify-start py-4 px-[23px] box-border gap-[8px] z-[8]">
          <div className="w-[180px] relative rounded bg-black h-[60px] hidden" />
          <div className="h-7 w-[102px] relative leading-[28px] cursor-pointer capitalize font-medium inline-block z-[1]">
            get started
          </div>
          <div className="h-[21.4px] w-6 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
            <img
              className="w-6 h-[7.4px] relative z-[1]"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </div>
        <div className="h-[43px] w-[111px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border text-black">
          <div className="w-[111px] h-7 relative cursor-pointer leading-[28px] capitalize font-medium inline-block z-[8]">
            watch video
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
