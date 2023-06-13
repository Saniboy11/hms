import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text, TextArea } from "components";

const GDUltrasonicScanPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1874px] mx-auto md:px-5 w-full">
          <div className="bg-indigo-900 flex md:flex-1 flex-col gap-3.5 items-center justify-center md:mt-0 mt-[15px] p-[11px] rounded-[25px] w-[7%] md:w-full">
            <div className="flex flex-col items-center justify-start mt-[18px] w-[72%] md:w-full">
              <Img
                className="h-[60px] md:h-auto object-cover rounded-[20px] w-[60px]"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <div
                className="common-pointer flex flex-col items-center justify-start mt-[55px] w-full"
                onClick={() => navigate("/ghome")}
              >
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_lock.svg"
                  alt="lock"
                />
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Home
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-[13px] w-full"
                onClick={() => navigate("/gpatientstwo")}
              >
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_cut.svg"
                  alt="cut"
                />
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Patients
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-3.5 w-full"
                onClick={() => navigate("/gdoctor")}
              >
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_car.svg"
                  alt="car"
                />
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Doctors
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-[13px] w-full"
                onClick={() => navigate("/gemr")}
              >
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_group300.svg"
                  alt="group300"
                />
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  EMR
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mb-[23px] w-[99%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                <Button className="bg-white-A700 flex h-[70px] items-center justify-center p-4 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[37px]"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </Button>
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Diagnostics
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-3 w-full"
                onClick={() => navigate("/gappointments")}
              >
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-3 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[45px]"
                    src="images/img_calendar_white_a700.svg"
                    alt="calendar"
                  />
                </Button>
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Appointment
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-3 w-[78%] md:w-full"
                onClick={() => navigate("/gbilldetails")}
              >
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-[15px] rounded-[50%] w-[70px]">
                  <Img
                    className="h-10"
                    src="images/img_car_white_a700.svg"
                    alt="car_One"
                  />
                </Button>
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Bill Details
                </Text>
              </div>
              <div
                className="common-pointer flex flex-col items-center justify-start mt-[68px] w-[73%] md:w-full"
                onClick={() => navigate("/gprofile")}
              >
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_user.svg"
                  alt="user"
                />
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Profile
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col justify-start w-[90%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img
                className="h-[198px] md:h-auto md:mt-0 mt-[46px] object-cover w-[198px]"
                src="images/img_healthcheckup.png"
                alt="healthcheckup"
              />
              <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[70px] md:mt-0 mt-[59px] w-[17%] md:w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtPoppinsMedium32"
                >
                  Ultrasonic Scan
                </Text>
                <div className="flex flex-row gap-[13px] items-start justify-between w-full">
                  <Text
                    className="common-pointer mt-0.5 text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                    onClick={() => navigate("/gdiagnostic")}
                  >
                    Diagnostics
                  </Text>
                  <Img
                    className="h-[19px] mt-[3px]"
                    src="images/img_forward.svg"
                    alt="forward"
                  />
                  <Text
                    className="mb-0.5 text-base text-gray-900_87"
                    size="txtPoppinsMedium16"
                  >
                    Ultrasonic Scan
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[931px] p-[3px] w-[13%] md:w-full">
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
                      alt="lock_One"
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
                      alt="cut_One"
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
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between md:ml-[0] ml-[63px] mt-[9px] w-[67%] md:w-full">
              <div className="flex flex-col h-[250px] items-center justify-start md:mt-0 mt-[76px] rounded-[50%] shadow-bs1 w-[250px]">
                <Img
                  className="h-[250px] md:h-auto rounded-[50%] w-[250px]"
                  src="images/img_pregnancyultra_250x250.png"
                  alt="pregnancyultra"
                />
              </div>
              <div className="flex flex-col gap-10 justify-start w-[61%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[212px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  Book Appointment
                </Text>
                <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-900_02"
                      size="txtPoppinsRegular16"
                    >
                      Patient Name
                    </Text>
                    <Input
                      name="group220"
                      placeholder="Brooklyn"
                      className="leading-[normal] p-0 placeholder:text-black-900_99 sm:px-5 text-[13px] text-black-900_99 text-left w-full"
                      wrapClassName="border border-black-900_99 border-solid sm:flex-1 pb-[9px] pl-[25px] pr-[35px] pt-3 rounded sm:w-full"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-900_02"
                      size="txtPoppinsRegular16"
                    >
                      Age
                    </Text>
                    <Text
                      className="border border-black-900_99 border-solid pl-[25px] pr-[35px] sm:px-5 py-2.5 rounded text-[13px] text-black-900_99"
                      size="txtPoppinsRegular13Black90099"
                    >
                      22
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-900_02"
                      size="txtPoppinsRegular16"
                    >
                      Gender
                    </Text>
                    <Input
                      name="gender_One"
                      placeholder="Male"
                      className="leading-[normal] p-0 placeholder:text-black-900_99 sm:px-5 text-[13px] text-black-900_99 text-left w-full"
                      wrapClassName="border border-black-900_99 border-solid sm:flex-1 pl-[25px] pr-[35px] py-2.5 rounded sm:w-full"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-900_02"
                      size="txtPoppinsRegular16"
                    >
                      Email
                    </Text>
                    <Input
                      name="email_One"
                      placeholder="brooklyns@mail.com"
                      className="leading-[normal] p-0 placeholder:text-black-900_99 sm:px-5 text-[13px] text-black-900_99 text-left w-full"
                      wrapClassName="border border-black-900_99 border-solid sm:flex-1 pb-[9px] pl-[25px] pr-[35px] pt-3 rounded sm:w-full"
                      type="email"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-base text-gray-900_02"
                      size="txtPoppinsRegular16"
                    >
                      Mobile
                    </Text>
                    <Input
                      name="group215"
                      placeholder="(603) 555-0123"
                      className="leading-[normal] p-0 placeholder:text-black-900_99 sm:px-5 text-[13px] text-black-900_99 text-left w-full"
                      wrapClassName="border border-black-900_99 border-solid sm:flex-1 pl-[25px] pr-[35px] py-2.5 rounded sm:w-full"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-14 md:ml-[0] mt-2.5 w-[68%] md:w-full">
              <Text
                className="md:mt-0 mt-[19px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtPoppinsMedium32"
              >
                Ultra Sonic Scan
              </Text>
              <Text
                className="md:ml-[0] ml-[188px] md:mt-0 mt-2.5 text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Address
              </Text>
              <TextArea
                className="border border-black-900_99 border-solid leading-[normal] md:ml-[0] ml-[202px] pb-[30px] pl-[25px] pr-[35px] pt-2.5 sm:px-5 rounded text-[13px] placeholder:text-black-900_99 text-black-900_99 text-left w-[37%] sm:w-full"
                name="group219"
                placeholder="10, abc, new streert,
Chennai,
Tamil Nadu"
                name="group219"
                placeholder={`10, abc, new streert,
Chennai,
Tamil Nadu`}
              ></TextArea>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start md:ml-[0] ml-[507px] mt-[11px] w-[33%] md:w-full">
              <Text
                className="text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Schedule time
              </Text>
              <div className="md:h-[41px] h-[50px] sm:ml-[0] ml-[153px] relative w-[24%] sm:w-full">
                <div className="absolute font-roboto h-[49px] inset-[0] justify-center m-auto w-full">
                  <div className="bg-white-A700 h-[15px] mb-[-7px] ml-[13px] w-[28%] z-[1]"></div>
                  <div className="h-[41px] mt-auto mx-auto w-full">
                    <Text
                      className="ml-2 mt-2.5 text-gray-900_99 text-sm tracking-[0.50px]"
                      size="txtRobotoRegular14Gray90099"
                    >
                      08/17/2023
                    </Text>
                    <div className="absolute border border-black-900_99 border-solid h-[41px] inset-[0] justify-center m-auto rounded-[3px] w-full"></div>
                  </div>
                </div>
                <Text
                  className="absolute left-[13%] text-black-900_99 text-xs top-[0]"
                  size="txtPoppinsMedium12Black90099"
                >
                  Date
                </Text>
              </div>
              <div className="md:h-[41px] h-[50px] sm:ml-[0] ml-[35px] relative w-[21%] sm:w-full">
                <div className="absolute font-roboto h-[49px] inset-[0] justify-center m-auto w-full">
                  <div className="bg-white-A700 h-[15px] mb-[-7px] ml-[13px] w-[33%] z-[1]"></div>
                  <div className="h-[41px] mt-auto mx-auto w-full">
                    <Text
                      className="ml-2 mt-2.5 text-gray-900_99 text-sm tracking-[0.50px]"
                      size="txtRobotoRegular14Gray90099"
                    >
                      11.30 AM
                    </Text>
                    <div className="absolute border border-black-900_99 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto p-1.5 rounded-[3px] w-full">
                      <Img
                        className="h-[26px] md:h-auto mb-[3px] object-cover w-[26px]"
                        src="images/img_clock_26x26.png"
                        alt="clock_Three"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute left-[15%] text-black-900_99 text-xs top-[0]"
                  size="txtPoppinsMedium12Black90099"
                >
                  Time
                </Text>
              </div>
            </div>
            <Button
              className="common-pointer bg-indigo-900 cursor-pointer font-bold leading-[normal] min-w-[180px] md:ml-[0] ml-[759px] mr-[744px] mt-[110px] py-[9px] rounded text-base text-center text-white-A700"
              onClick={() => navigate("/gdiagnostic")}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GDUltrasonicScanPage;
