import React from "react";

import { Button, Img, List, Text } from "components";

const GHomePage = () => {
  return (
    <>
      <div className="bg-light_blue-50 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1879px] mx-auto md:px-5 w-full">
          <List
            className="bg-indigo-900 flex flex-col gap-[13px] md:mt-0 mt-[15px] p-[11px] rounded-[25px] w-[7%]"
            orientation="vertical"
          >
            <div className="flex flex-col items-center justify-start w-[72%] md:w-full">
              <Img
                className="h-[60px] md:h-auto object-cover rounded-[20px] w-[60px]"
                src="images/img_image2.png"
                alt="imageTwo"
              />
              <div className="flex flex-col items-center justify-start mt-[55px] w-full">
                <Button className="bg-light_blue-50 flex h-[70px] items-center justify-center p-[15px] rounded-[50%] w-[70px]">
                  <Img
                    className="h-10"
                    src="images/img_music_indigo_900.svg"
                    alt="music"
                  />
                </Button>
                <Text
                  className="text-light_blue-50 text-sm"
                  size="txtPoppinsBold14Lightblue50"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-[13px] w-full">
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-3.5 rounded-[50%] w-[70px]">
                  <Img src="images/img_cut_light_blue_50.svg" alt="cut" />
                </Button>
                <Text
                  className="text-light_blue-50 text-sm"
                  size="txtPoppinsBold14Lightblue50"
                >
                  Patients
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-3.5 w-full">
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-[17px] rounded-[50%] w-[70px]">
                  <Img
                    className="h-9"
                    src="images/img_lightbulb.svg"
                    alt="lightbulb"
                  />
                </Button>
                <Text
                  className="text-light_blue-50 text-sm"
                  size="txtPoppinsBold14Lightblue50"
                >
                  Doctors
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-[13px] w-full">
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-[15px] rounded-[50%] w-[70px]">
                  <Img
                    className="h-10"
                    src="images/img_forward_light_blue_50.svg"
                    alt="forward"
                  />
                </Button>
                <Text
                  className="text-light_blue-50 text-sm"
                  size="txtPoppinsBold14Lightblue50"
                >
                  EMR
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-4 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[37px]"
                    src="images/img_minimize_light_blue_50.svg"
                    alt="minimize"
                  />
                </Button>
                <Text
                  className="text-light_blue-50 text-sm"
                  size="txtPoppinsBold14Lightblue50"
                >
                  Diagnostics
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-3 w-full">
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-3 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[45px]"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                </Button>
                <Text
                  className="text-light_blue-50 text-sm"
                  size="txtPoppinsBold14Lightblue50"
                >
                  Appointment
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-3 w-[78%] md:w-full">
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-[15px] rounded-[50%] w-[70px]">
                  <Img
                    className="h-10"
                    src="images/img_car_light_blue_50.svg"
                    alt="car"
                  />
                </Button>
                <Text
                  className="text-light_blue-50 text-sm"
                  size="txtPoppinsBold14Lightblue50"
                >
                  Bill Details
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-[68px] w-[73%] md:w-full">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_user_light_blue_50.svg"
                  alt="user"
                />
                <Text
                  className="text-light_blue-50 text-sm"
                  size="txtPoppinsBold14Lightblue50"
                >
                  Profile
                </Text>
              </div>
            </div>
          </List>
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[130px] items-center justify-start w-[90%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img
                className="md:flex-1 h-[130px] sm:h-auto md:mt-0 mt-11 object-cover w-[11%] md:w-full"
                src="images/img_image3n1.png"
                alt="image3nOne"
              />
              <div className="md:h-[69px] h-[99px] md:ml-[0] ml-[21px] md:mt-0 mt-[53px] relative w-[23%] md:w-full">
                <Text
                  className="absolute left-[0] sm:text-[40px] md:text-[46px] text-[50px] text-red-A400 top-[0] tracking-[0.50px]"
                  size="txtPoppinsBold50"
                >
                  ABC Hospital
                </Text>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto text-2xl md:text-[22px] text-red-A400 sm:text-xl tracking-[0.50px] w-max"
                  size="txtPoppinsBold24"
                >
                  Hospital Management System
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[887px] p-[3px] w-[13%] md:w-full">
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
            <div className="flex md:flex-col flex-row font-roboto md:gap-10 items-center justify-between w-[93%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[77px] items-center justify-start">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[0.50px]"
                  size="txtRobotoRomanBold48"
                >
                  Services
                </Text>
                <div className="md:gap-5 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-col h-[180px] items-center justify-start rounded-[50%] shadow-bs w-[180px]">
                      <Img
                        className="h-[180px] md:h-auto rounded-[50%] w-[180px]"
                        src="images/img_patientdyingi.png"
                        alt="patientdyingi"
                      />
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.50px]"
                      size="txtRobotoRomanMedium24"
                    >
                      Patients
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[9px] items-center justify-start w-full">
                    <div className="flex flex-col h-[180px] items-center justify-start rounded-[50%] shadow-bs w-[180px]">
                      <Img
                        className="h-[180px] md:h-auto rounded-[50%] w-[180px]"
                        src="images/img_doctorexaminin.png"
                        alt="doctorexaminin"
                      />
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.50px]"
                      size="txtRobotoRomanMedium24"
                    >
                      Doctors
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-col h-[180px] items-center justify-start rounded-[50%] shadow-bs w-[180px]">
                      <Img
                        className="h-[180px] md:h-auto rounded-[50%] w-[180px]"
                        src="images/img_howdoesanehr.png"
                        alt="howdoesanehr"
                      />
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.50px]"
                      size="txtRobotoRomanMedium24"
                    >
                      EHR
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[11px] items-center justify-start w-full">
                    <div className="flex flex-col h-[180px] items-center justify-start rounded-[50%] shadow-bs w-[180px]">
                      <Img
                        className="h-[180px] md:h-auto rounded-[50%] w-[180px]"
                        src="images/img_scientistmicro.png"
                        alt="scientistmicro"
                      />
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.50px]"
                      size="txtRobotoRomanMedium24"
                    >
                      Diagnostics
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 items-center justify-start w-full">
                    <div className="flex flex-col h-[179px] items-center justify-start rounded-bl-[50%] rounded-br-[50%] shadow-bs w-[179px]">
                      <Img
                        className="h-[179px] md:h-auto object-cover rounded-bl-[50%] rounded-br-[50%] w-[179px]"
                        src="images/img_womanchoosing.png"
                        alt="womanchoosing"
                      />
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.50px]"
                      size="txtRobotoRomanMedium24"
                    >
                      Appointments
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-col h-[180px] items-center justify-start rounded-[50%] shadow-bs w-[180px]">
                      <Img
                        className="h-[180px] md:h-auto rounded-[50%] w-[180px]"
                        src="images/img_pngtreebillpa.png"
                        alt="pngtreebillpa"
                      />
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.50px]"
                      size="txtRobotoRomanMedium24"
                    >
                      Bill Details
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="h-[649px] md:h-auto object-cover"
                src="images/img_hms21.png"
                alt="hmsTwentyOne"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GHomePage;
