import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import GAddPatientAssignDoctorRow from "components/GAddPatientAssignDoctorRow";

const GAppointmentsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[15px] px-[15px] w-full">
        <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between max-w-[1879px] mx-auto md:px-5 w-full">
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
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-[17px] rounded-[50%] w-[70px]">
                  <Img className="h-9" src="images/img_car.svg" alt="car" />
                </Button>
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
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-[15px] rounded-[50%] w-[70px]">
                  <Img
                    className="h-10"
                    src="images/img_group300.svg"
                    alt="group300"
                  />
                </Button>
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  EMR
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
              <div
                className="common-pointer flex flex-col items-center justify-start w-[89%] md:w-full"
                onClick={() => navigate("/gdiagnostic")}
              >
                <Button className="bg-indigo-900 flex h-[70px] items-center justify-center p-4 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[37px]"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                </Button>
                <Text
                  className="text-sm text-white-A700"
                  size="txtPoppinsBold14"
                >
                  Diagnostics
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-3 w-full">
                <Button className="bg-white-A700 flex h-[70px] items-center justify-center p-3 rounded-[50%] w-[70px]">
                  <Img
                    className="h-[45px]"
                    src="images/img_bag.svg"
                    alt="bag"
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
                    alt="car"
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
          </List>
          <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[92%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[37px] items-start justify-between w-full">
              <Img
                className="h-[254px] md:h-auto md:mt-0 mt-6 object-cover w-[254px]"
                src="images/img_onlineconsultation.png"
                alt="onlineconsultat"
              />
              <div className="flex flex-col gap-[33px] items-start justify-start">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[63px]">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                      size="txtPoppinsMedium32"
                    >
                      Appointments
                    </Text>
                    <Text
                      className="mt-[3px] text-base text-gray-900_87"
                      size="txtPoppinsMedium16"
                    >
                      Appointments
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-center justify-start mb-[22px] p-[3px] w-[15%] sm:w-full">
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
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1241px] md:ml-[0] ml-[5px] w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-xl w-auto"
                      size="txtPoppinsMedium20"
                    >
                      List of Appointments
                    </Text>
                    <Text
                      className="text-blue_gray-200 text-xs w-auto"
                      size="txtPoppinsMedium12"
                    >
                      345 available doctors
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-center justify-start w-[15%] sm:w-full">
                    <Button
                      className="common-pointer bg-indigo-900 cursor-pointer flex items-center justify-center min-w-[179px] px-5 py-2.5 rounded-md"
                      onClick={() => navigate("/gaddpatientbasicinfoapp")}
                      leftIcon={
                        <Img
                          className="h-5 mr-2"
                          src="images/img_contrast_white_a700.svg"
                          alt="contrast"
                        />
                      }
                    >
                      <div className="font-semibold leading-[normal] text-left text-white-A700 text-xs">
                        New Appointment
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-start w-[83%] md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-[94%] md:w-full">
                <div className="bg-gray-50 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[7px] rounded-md w-[95%] md:w-full">
                  <Text
                    className="ml-3 md:ml-[0] md:mt-0 my-0.5 text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    Patient Name
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[135px] md:mt-0 my-0.5 text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    ID
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[125px] md:mt-0 my-0.5 text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    Email
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[175px] md:mt-0 my-0.5 text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    Phone number
                  </Text>
                  <Text
                    className="ml-14 md:ml-[0] md:mt-0 mt-1 text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    Appoinment Time
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[57px] md:mt-0 my-0.5 text-base text-blue_gray-200 tracking-[0.48px]"
                    size="txtPoppinsSemiBold16Bluegray200"
                  >
                    Doctor Name
                  </Text>
                </div>
                <Text
                  className="text-base text-blue_gray-200 tracking-[0.48px]"
                  size="txtPoppinsSemiBold16Bluegray200"
                >
                  Staus
                </Text>
              </div>
              <List
                className="flex flex-col gap-[30px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex relative w-[98%] md:w-full">
                  <GAddPatientAssignDoctorRow
                    className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-auto w-[91%]"
                    userimage="images/img_user_23.svg"
                    username="Brooklyn"
                    usersurname="Klase"
                    userid="87364523"
                    useremail="brooklyns@mail.com"
                    userphone="(603) 555-0123"
                    userdate="21/12/2022"
                    usertime="10:40 PM"
                  />
                  <Button className="bg-green-A100 cursor-pointer font-semibold leading-[normal] min-w-[150px] ml-[-24px] my-auto py-[5px] rounded-[5px] text-base text-center text-light_green-900 tracking-[0.48px] z-[1]">
                    Attended
                  </Button>
                </div>
                <div className="flex relative w-full">
                  <GAddPatientAssignDoctorRow
                    className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-auto w-[89%]"
                    userimage="images/img_user_24.svg"
                    username="Kristin Watson"
                    usersurname="Wawy"
                    userid="93874563"
                    useremail="kristinw@mail.com"
                    userphone="(219) 555-0114"
                    userdate="22/12/2022"
                    usertime="05:20 PM"
                  />
                  <div className="flex flex-row gap-5 items-center justify-between ml-[-24px] my-auto w-[14%] z-[1]">
                    <Button className="bg-deep_orange-200 cursor-pointer font-semibold leading-[normal] min-w-[150px] py-[5px] rounded-[5px] text-base text-center text-red-A700_01 tracking-[0.48px]">
                      Not Attended
                    </Button>
                    <Img
                      className="h-[19px] w-[19px]"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="flex relative w-[98%] md:w-full">
                  <GAddPatientAssignDoctorRow
                    className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-auto w-[91%]"
                    userimage="images/img_user_25.svg"
                    username="Jacob Jones"
                    usersurname="Rahi"
                    userid="23847569"
                    useremail="jacbj@mail.com"
                    userphone="(319) 555-0115"
                    userdate="23/12/2022"
                    usertime="12:40 PM"
                  />
                  <Button className="bg-green-A100 cursor-pointer font-semibold leading-[normal] min-w-[150px] ml-[-24px] my-auto py-[5px] rounded-[5px] text-base text-center text-light_green-900 tracking-[0.48px] z-[1]">
                    Attended
                  </Button>
                </div>
                <div className="flex relative w-full">
                  <GAddPatientAssignDoctorRow
                    className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-auto w-[89%]"
                    userimage="images/img_user_26.svg"
                    username="Cody Fisher"
                    usersurname="Raney"
                    userid="39485632"
                    useremail="codyf@mail.com"
                    userphone="(229) 555-0109"
                    userdate="24/12/2022"
                    usertime="03:00 PM"
                  />
                  <div className="flex flex-row gap-5 items-center justify-between ml-[-24px] my-auto w-[14%] z-[1]">
                    <Button className="bg-deep_orange-200 cursor-pointer font-semibold leading-[normal] min-w-[150px] py-[5px] rounded-[5px] text-base text-center text-red-A700_01 tracking-[0.48px]">
                      Not Attended
                    </Button>
                    <Img
                      className="h-[19px] w-[19px]"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <div className="flex relative w-[98%] md:w-full">
                  <GAddPatientAssignDoctorRow
                    className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-auto md:pr-10 sm:pr-5 pr-[307px] w-[91%]"
                    userimage="images/img_user_27.svg"
                    username="Brooklyn"
                    usersurname="Klase"
                    userid="87364523"
                    useremail="brooklyns@mail.com"
                    userphone="(603) 555-0123"
                    userdate="21/12/2022"
                    usertime="10:40 PM"
                  />
                  <Button className="bg-green-A100 cursor-pointer font-semibold leading-[normal] min-w-[150px] ml-[-24px] my-auto py-[5px] rounded-[5px] text-base text-center text-light_green-900 tracking-[0.48px] z-[1]">
                    Attended
                  </Button>
                </div>
                <div className="flex relative w-[98%] md:w-full">
                  <GAddPatientAssignDoctorRow
                    className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-auto md:pr-10 sm:pr-5 pr-[306px] w-[91%]"
                    userimage="images/img_user_28.svg"
                    username="Kristin Watson"
                    usersurname=" Diase"
                    userid="93874563"
                    useremail="kristinw@mail.com"
                    userphone="(219) 555-0114"
                    userdate="22/12/2022"
                    usertime="05:20 PM"
                  />
                  <Button className="bg-green-A100 cursor-pointer font-semibold leading-[normal] min-w-[150px] ml-[-24px] my-auto py-[5px] rounded-[5px] text-base text-center text-light_green-900 tracking-[0.48px] z-[1]">
                    Attended
                  </Button>
                </div>
                <div className="flex relative w-[98%] md:w-full">
                  <GAddPatientAssignDoctorRow
                    className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-auto md:pr-10 sm:pr-5 pr-[305px] w-[91%]"
                    userimage="images/img_user_29.svg"
                    username="Jacob Jones"
                    usersurname="Mawa"
                    userid="23847569"
                    useremail="jacbj@mail.com"
                    userphone="(319) 555-0115"
                    userdate="23/12/2022"
                    usertime="12:40 PM"
                  />
                  <Button className="bg-green-A100 cursor-pointer font-semibold leading-[normal] min-w-[150px] ml-[-24px] my-auto py-[5px] rounded-[5px] text-base text-center text-light_green-900 tracking-[0.48px] z-[1]">
                    Attended
                  </Button>
                </div>
                <div className="flex relative w-[98%] md:w-full">
                  <GAddPatientAssignDoctorRow
                    className="flex md:flex-col flex-row md:gap-5 items-center justify-start my-auto md:pr-10 sm:pr-5 pr-[305px] w-[91%]"
                    userimage="images/img_user_30.svg"
                    username="Cody Fisher"
                    usersurname="yuros"
                    userid="39485632"
                    useremail="codyf@mail.com"
                    userphone="(229) 555-0109"
                    userdate="24/12/2022"
                    usertime="03:00 PM"
                  />
                  <Button className="bg-green-A100 cursor-pointer font-semibold leading-[normal] min-w-[150px] ml-[-24px] my-auto py-[5px] rounded-[5px] text-base text-center text-light_green-900 tracking-[0.48px] z-[1]">
                    Attended
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GAppointmentsPage;
