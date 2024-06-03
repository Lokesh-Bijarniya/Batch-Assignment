import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Frame from "../components/Frame";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";

const AppLandingPage = () => {
  return (
    <div className="w-full h-[5887px] relative rounded-[50px] bg-white overflow-hidden flex flex-col items-start justify-start pt-10 pb-[41.3px] pr-[25.5px] pl-[175px] box-border gap-[115px] text-left text-lg text-black font-calistoga">
      <div className="w-[1090px] h-[60px] flex flex-row items-start justify-start py-0 pr-0 pl-[108px] box-border text-8xs-2 font-plus-jakarta-sans">
        <div className="h-[60px] w-[982px] flex flex-row items-start justify-start gap-[375px]">
          <div className="h-[43px] w-[427px] flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border">
            <div className="w-[427px] h-[26px] flex flex-row items-start justify-start gap-[40px]">
              <div className="h-[11px] w-[9px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                <div className="w-[9px] h-[5px] relative font-extrabold inline-block shrink-0 z-[8]">
                  TM
                </div>
              </div>
              <div className="h-[26px] w-[378px] flex flex-row items-start justify-start gap-[24px] text-xl font-abeezee">
                <b className="h-[26px] w-[60px] relative leading-[26px] capitalize inline-block font-archivo-black text-tomato z-[8] cursor-pointer">
                  home
                </b>
                <div className="h-[26px] w-[89px] relative leading-[26px] capitalize font-medium inline-block shrink-0 z-[8] cursor-pointer">
                  about us
                </div>
                <div className="h-[26px] w-[68px] relative leading-[26px] capitalize font-medium inline-block z-[8] cursor-pointer">
                  pricing
                </div>
                <div className="h-[26px] w-[89px] relative leading-[26px] capitalize font-medium inline-block z-[8] cursor-pointer">
                  features
                </div>
              </div>
            </div>
          </div>
          <div className="h-[60px] w-[180px] rounded bg-black flex flex-row items-start justify-start py-4 px-[46px] box-border z-[8] text-lg text-white font-abeezee">
            <div className="w-[180px] relative rounded bg-black h-[60px] hidden" />
            <div className="h-7 w-[88px] relative leading-[28px] capitalize font-medium inline-block z-[1] cursor-pointer">
              download
            </div>
          </div>
        </div>
      </div>
      <div className="w-[638px] h-[741px] flex flex-row items-start justify-start relative text-[106.4px] font-archivo-black">
        <b className="h-[107px] w-[89px] absolute !m-[0] bottom-[63.72px] left-[-12px] leading-[106.38px] capitalize inline-block [transform:_rotate(-28deg)] [transform-origin:0_0] z-[6]">
          a
        </b>
        <FrameComponent2 />
      </div>
      <FrameComponent1 />
      <div className="w-[1117px] h-[380.7px] flex flex-row items-start justify-start pt-0 pb-[179.7px] pr-0 pl-[555px] box-border text-9xl">
        <div className="h-[201px] w-[562px] flex flex-col items-start justify-start gap-[33px]">
          <div className="w-[325px] h-7 flex flex-row items-start justify-start py-0 pr-0 pl-[63px] box-border">
            <div className="h-7 w-[262px] relative leading-[28px] capitalize font-semibold inline-block z-[8]">
              fully customizable
            </div>
          </div>
          <div className="w-[562px] h-[140px] relative text-lg leading-[28px] capitalize font-medium font-abeezee text-gray-500 inline-block z-[8]">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </div>
        </div>
      </div>
      <div className="w-[1090px] h-[774px] flex flex-row items-start justify-start pt-0 pb-[129px] pr-0 pl-[318px] box-border">
        <div className="h-[645px] w-[772px] flex flex-col items-start justify-start gap-[88px]">
          <div className="w-[455px] h-[165px] flex flex-col items-end justify-start pt-0 px-0 pb-[37px] box-border gap-[4px] text-center font-abeezee">
            <div className="w-[302px] h-7 flex flex-row items-start justify-end py-0 pr-[152px] pl-0 box-border">
              <div className="h-7 w-[150px] relative tracking-[0.16em] leading-[28px] uppercase font-medium inline-block z-[8]">
                testimonial
              </div>
            </div>
            <b className="w-[455px] h-24 relative text-29xl leading-[48px] capitalize inline-block font-archivo-black z-[8]">
              what our users say about us?
            </b>
          </div>
          <div className="w-[772px] h-[276px] flex flex-row items-start justify-start py-0 pr-0 pl-[330px] box-border text-9xl">
            <div className="h-[276px] w-[442px] flex flex-col items-start justify-start gap-[24px]">
              <div className="w-[442px] h-14 relative leading-[28px] capitalize font-semibold inline-block z-[8]">
                the best financial accounting app ever!
              </div>
              <div className="w-[442px] h-[196px] relative text-lg leading-[28px] capitalize font-medium font-abeezee text-gray-500 inline-block z-[8]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </div>
            </div>
          </div>
          <div className="w-[427px] h-7 flex flex-row items-start justify-start py-0 pr-0 pl-[330px] box-border">
            <div className="h-7 w-[97px] relative leading-[28px] capitalize font-semibold inline-block z-[8]">
              nick jonas
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1090px] h-[791px] flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[40px] text-tomato font-abeezee">
        <div className="w-[497px] h-32 flex flex-col items-start justify-start gap-[4px] shrink-0 [debug_commit:bf4bc93]">
          <div className="w-11 h-7 relative tracking-[0.16em] leading-[28px] uppercase font-medium inline-block z-[8]">
            faq
          </div>
          <b className="w-[497px] h-24 relative text-29xl leading-[48px] capitalize inline-block font-archivo-black text-black z-[8]">
            Frequently asked questions
          </b>
        </div>
        <div className="w-[1090px] h-[583px] flex flex-row items-start justify-start gap-[20px] shrink-0 [debug_commit:bf4bc93] z-[8] text-9xl text-white font-calistoga">
          <div className="h-[583px] w-[535px] flex flex-col items-start justify-start gap-[20px]">
            <div className="w-[535px] h-[181px] rounded-lg bg-tomato flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px]">
              <div className="w-[535px] relative rounded-lg bg-tomato h-[181px] hidden" />
              <div className="w-[474px] h-14 relative leading-[28px] capitalize font-semibold inline-block z-[1]">
                the best financial accounting app ever!
              </div>
              <div className="w-[466px] h-14 relative text-lg leading-[28px] capitalize font-medium font-abeezee text-justify inline-block z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>
            <div className="w-[535px] h-[181px] rounded-lg bg-white flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] text-black">
              <div className="w-[535px] relative rounded-lg bg-white h-[181px] hidden" />
              <div className="w-[474px] h-14 relative leading-[28px] capitalize font-semibold inline-block z-[1]">
                the best financial accounting app ever!
              </div>
              <div className="w-[466px] h-14 relative text-lg leading-[28px] capitalize font-medium font-abeezee text-gray-500 text-justify inline-block z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>
            <div className="w-[535px] h-[181px] rounded-lg bg-tomato flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px]">
              <div className="w-[535px] relative rounded-lg bg-tomato h-[181px] hidden" />
              <div className="w-[474px] h-14 relative leading-[28px] capitalize font-semibold inline-block z-[1]">
                the best financial accounting app ever!
              </div>
              <div className="w-[466px] h-14 relative text-lg leading-[28px] capitalize font-medium font-abeezee text-justify inline-block z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>
          </div>
          <div className="h-[583px] w-[535px] flex flex-col items-start justify-start gap-[20px] text-black">
            <div className="w-[535px] h-[181px] rounded-lg bg-white flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px]">
              <div className="w-[535px] relative rounded-lg bg-white h-[181px] hidden" />
              <div className="w-[474px] h-14 relative leading-[28px] capitalize font-semibold inline-block z-[1]">
                the best financial accounting app ever!
              </div>
              <div className="w-[466px] h-14 relative text-lg leading-[28px] capitalize font-medium font-abeezee text-gray-500 text-justify inline-block z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>
            <div className="w-[535px] h-[181px] rounded-lg bg-tomato flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px] text-white">
              <div className="w-[535px] relative rounded-lg bg-tomato h-[181px] hidden" />
              <div className="w-[474px] h-14 relative leading-[28px] capitalize font-semibold inline-block z-[1]">
                the best financial accounting app ever!
              </div>
              <div className="w-[466px] h-14 relative text-lg leading-[28px] capitalize font-medium font-abeezee text-justify inline-block z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>
            <div className="w-[535px] h-[181px] rounded-lg bg-white flex flex-col items-start justify-start pt-[31px] pb-[30px] pr-[30px] pl-[31px] box-border gap-[8px]">
              <div className="w-[535px] relative rounded-lg bg-white h-[181px] hidden" />
              <div className="w-[474px] h-14 relative leading-[28px] capitalize font-semibold inline-block z-[1]">
                the best financial accounting app ever!
              </div>
              <div className="w-[466px] h-14 relative text-lg leading-[28px] capitalize font-medium font-abeezee text-gray-500 text-justify inline-block z-[1]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1090px] h-[548px] flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border">
        <Frame />
      </div>
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute top-[1123.7px] left-[1271px] w-[327px] h-[237.3px]"
          alt=""
          src="/group-35897.svg"
        />
        <img
          className="absolute top-[4689.7px] left-[34px] w-[327px] h-[237.3px]"
          alt=""
          src="/group-35897.svg"
        />
        <img
          className="absolute top-[759.3px] left-[476px] rounded-lg w-64 h-[71px]"
          alt=""
          src="/rectangle-4.svg"
        />
        <GroupComponent />
        <img
          className="absolute top-[131px] left-[915px] w-[457.2px] h-[717.1px]"
          alt=""
          src="/group-35899.svg"
        />
        <img
          className="absolute top-[152px] left-[341px] w-[317px] h-[230px]"
          alt=""
          src="/group-35896.svg"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[8220px] object-cover mix-blend-soft-light z-[7]"
          alt=""
          src="/rectangle@2x.png"
        />
        <img
          className="absolute top-[462px] left-[395px] w-[29px] h-[29px] z-[8]"
          alt=""
          src="/group-3.svg"
        />
        <img
          className="absolute top-[116px] left-[46px] w-[67.9px] h-[67.9px] object-contain z-[8]"
          alt=""
          src="/star-8.svg"
        />
        <div className="absolute top-[188px] left-[823px] w-[442px] h-[645px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-lg w-[442px] h-[645px] object-cover"
            alt=""
            src="/frame-1@2x.png"
          />
          <img
            className="absolute top-[5px] left-[70px] w-[371.8px] h-[552.4px] object-contain z-[9]"
            alt=""
            src="/iphone13profront@2x.png"
          />
        </div>
        <img
          className="absolute top-[116px] left-[771px] w-[371.3px] h-[551.6px] object-contain z-[10]"
          alt=""
          src="/iphone13profront@2x.png"
        />
        <img
          className="absolute top-[58.2px] left-[215.4px] w-[65.8px] h-[29.3px] z-[8]"
          alt=""
          src="/vector1.svg"
        />
        <img
          className="absolute top-[53px] left-[175px] w-[34px] h-[34px] overflow-hidden z-[8]"
          alt=""
          src="/frame.svg"
        />
        <img
          className="absolute top-[3534.7px] left-[823px] w-10 h-10 object-contain z-[8]"
          alt=""
          src="/group-28@2x.png"
        />
        <div className="absolute top-[3539.7px] left-[871px] w-36 h-[30px] opacity-[0.5] z-[8]">
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_72px)] w-[30px] h-[30px] object-cover"
            alt=""
            src="/group-27@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_34px)] w-[30px] h-[30px] object-cover"
            alt=""
            src="/group-29@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_4px)] w-[30px] h-[30px] object-cover"
            alt=""
            src="/group-30@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_42px)] w-[30px] h-[30px] object-cover"
            alt=""
            src="/group-31@2x.png"
          />
        </div>
        <div className="absolute top-[3089.7px] left-[80px] w-[713px] h-[713px]">
          <img
            className="absolute top-[249px] left-[117px] w-[327px] h-[237.3px]"
            alt=""
            src="/group-1000002356.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[713px] h-[713px]"
            alt=""
            src="/group-1000002332.svg"
          />
        </div>
        <img
          className="absolute top-[1659.7px] left-[1370px] w-16 h-16 z-[8]"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[2861.7px] left-[1136px] w-16 h-16 z-[8]"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[3941.7px] left-[779px] w-16 h-16 z-[8]"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[4689.7px] left-[1323px] w-16 h-16 z-[8]"
          alt=""
          src="/star-5.svg"
        />
        <img
          className="absolute top-[3702.7px] left-[48px] w-[67.9px] h-[67.9px] object-contain z-[10]"
          alt=""
          src="/star-2.svg"
        />
        <img
          className="absolute top-[4900.7px] left-[48px] w-[67.9px] h-[67.9px] object-contain z-[8]"
          alt=""
          src="/star-2.svg"
        />
        <img
          className="absolute top-[1892.5px] left-[175px] w-12 h-12 z-[8]"
          alt=""
          src="/group-358991.svg"
        />
        <img
          className="absolute top-[2476px] left-[730px] w-12 h-12 z-[8]"
          alt=""
          src="/group-358992.svg"
        />
        <img
          className="absolute top-[5439.7px] left-[175px] w-[34px] h-[34px] overflow-hidden z-[8]"
          alt=""
          src="/frame.svg"
        />
        <img
          className="absolute top-[5444.9px] left-[215.4px] w-[65.8px] h-[29.3px] z-[8]"
          alt=""
          src="/vector1.svg"
        />
        <img
          className="absolute top-[5490.7px] left-[175px] w-6 h-6 overflow-hidden z-[8]"
          alt=""
          src="/frame1.svg"
        />
        <img
          className="absolute top-[5532.7px] left-[175px] w-6 h-6 overflow-hidden z-[8]"
          alt=""
          src="/frame2.svg"
        />
      </div>
      <div className="w-[1091px] h-[406px] flex flex-col items-end justify-start gap-[92px] text-base font-abeezee">
        <FrameComponent />
        <div className="w-[1091px] h-[104px] flex flex-row items-start justify-end py-0 pr-px pl-0 box-border">
          <div className="h-[104px] w-[1090px] box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[39px] pr-[365px] pl-[369px] z-[8] border-t-[1px] border-solid border-gray-600">
            <div className="h-[26px] w-[356px] relative leading-[26px] capitalize font-medium inline-block">
              Copyright 2022 uifry.com all rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLandingPage;
