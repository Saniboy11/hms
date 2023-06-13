import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const GLoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-end justify-start mx-auto md:pl-10 sm:pl-5 pl-[154px] w-full">
        <div className="flex flex-col gap-[26px] items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="md:mt-0 mt-[92px] md:text-5xl text-[70px] text-indigo-900"
              size="txtPoppinsSemiBold70"
            >
              <>
                Welcome to Nubekon HMS
                <br />
                design prototype. <br />
                Click login to start.
              </>
            </Text>
            <div className="flex flex-col items-center justify-start p-[3px]">
              <div className="flex flex-col gap-2 items-center justify-start mb-[29px] mt-[25px] w-[99%] md:w-full">
                <div className="flex flex-row items-start justify-evenly w-full">
                  <Img
                    className="h-[11px] mt-[3px]"
                    src="images/img_contrast.svg"
                    alt="contrast"
                  />
                  <Img
                    className="h-[9px] mt-1.5 w-2"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Img
                    className="h-[9px] mt-1.5"
                    src="images/img_lock_black_900.svg"
                    alt="lock"
                  />
                  <Img
                    className="h-[13px] mt-0.5"
                    src="images/img_vector_black_900_13x2.svg"
                    alt="vector"
                  />
                  <Img
                    className="h-[13px] mt-1.5"
                    src="images/img_location.svg"
                    alt="location"
                  />
                  <Img
                    className="h-[9px] mt-1.5 w-2"
                    src="images/img_music.svg"
                    alt="music"
                  />
                  <Img
                    className="h-[9px] mt-1.5 w-2"
                    src="images/img_clock.svg"
                    alt="clock_One"
                  />
                  <Img
                    className="h-[13px]"
                    src="images/img_vector.svg"
                    alt="vector_One"
                  />
                  <Img
                    className="h-[9px] mt-[5px]"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                  <Img
                    className="h-[13px] mt-0.5"
                    src="images/img_vector_black_900_13x2.svg"
                    alt="vector_Two"
                  />
                  <Img
                    className="h-3 mt-[3px]"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                  <Img
                    className="h-[13px]"
                    src="images/img_reply.svg"
                    alt="reply"
                  />
                  <Img
                    className="h-[13px]"
                    src="images/img_vector_black_900_13x3.svg"
                    alt="vector_Three"
                  />
                  <Img
                    className="h-[9px] mt-1.5 w-2"
                    src="images/img_contrast_black_900.svg"
                    alt="contrast_One"
                  />
                  <Img
                    className="h-[9px] mt-1.5 w-2"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <Img
                    className="h-[9px] mt-1.5 w-2"
                    src="images/img_clock.svg"
                    alt="clock_Two"
                  />
                  <Img
                    className="h-[18px]"
                    src="images/img_checkmark_red_500.svg"
                    alt="checkmark_One"
                  />
                  <Img
                    className="h-[13px]"
                    src="images/img_contrast_black_900_13x7.svg"
                    alt="contrast_Two"
                  />
                  <Img
                    className="h-[13px] mt-1.5"
                    src="images/img_cut_black_900.svg"
                    alt="cut"
                  />
                </div>
                <div className="flex flex-row items-center justify-evenly w-full">
                  <Img
                    className="h-6"
                    src="images/img_checkmark_black_900.svg"
                    alt="checkmark_Two"
                  />
                  <Img
                    className="h-[25px] w-[26px]"
                    src="images/img_vector_black_900.svg"
                    alt="vector_Four"
                  />
                  <Img
                    className="h-6 w-[25px]"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                  <Img
                    className="h-6"
                    src="images/img_checkmark_black_900.svg"
                    alt="checkmark_Three"
                  />
                  <Img
                    className="h-6"
                    src="images/img_location_black_900.svg"
                    alt="location_One"
                  />
                  <Img
                    className="h-[26px]"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                  <Img
                    className="h-6"
                    src="images/img_checkmark_black_900.svg"
                    alt="checkmark_Four"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-[50px] items-start justify-start md:mt-0 mt-[63px]">
              <Button
                className="border-[3px] border-indigo-900 border-solid cursor-pointer flex items-center justify-center min-w-[273px] px-8 py-[15px] rounded-md"
                leftIcon={
                  <Img
                    className="h-[30px] mt-[3px] mb-0.5 mr-2.5"
                    src="images/img_materialsymbolsarrowdropdowncircleoutlinerounded.svg"
                    alt="material-symbols:arrow-drop-down-circle-outline-rounded"
                  />
                }
              >
                <div className="font-medium leading-[normal] md:text-[22px] sm:px-5 sm:text-xl text-2xl text-black-900 text-left">
                  Your Role
                </div>
              </Button>
              <Input
                name="username"
                placeholder="Enter your username"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-400 sm:pl-5 sm:text-xl text-2xl text-blue_gray-400 text-left w-full"
                wrapClassName="border-[3px] border-indigo-900 border-solid pb-3 pl-[30px] pr-3 pt-[17px] rounded-md w-full"
                type="text"
              ></Input>
              <Input
                name="password"
                placeholder="Enter your password"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-blue_gray-400 sm:pl-5 sm:text-xl text-2xl text-blue_gray-400 text-left w-full"
                wrapClassName="border-[3px] border-indigo-900 border-solid pb-3 pl-[30px] pr-3 pt-[17px] rounded-md w-full"
                type="password"
              ></Input>
              <Button
                className="common-pointer bg-indigo-900 cursor-pointer font-bold leading-[normal] min-w-[231px] py-[15px] rounded-md text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                onClick={() => navigate("/ghome")}
              >
                Log-in
              </Button>
            </div>
            <Img
              className="h-[658px] md:h-auto object-cover"
              src="images/img_pic.png"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GLoginPage;
