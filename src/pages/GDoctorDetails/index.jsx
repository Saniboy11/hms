import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text, TextArea } from "components";

const GDoctorDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-poppins h-[1080px] mx-auto pb-[15px] px-[15px] relative w-full">
        <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 right-[1%] top-[0] w-[89%]">
          <Img
            className="h-[232px] md:h-auto md:mt-0 mt-[41px] object-cover w-[232px]"
            src="images/img_medicalvideoc.png"
            alt="medicalvideoc"
          />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[39px] md:mt-0 mt-16 w-[11%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtPoppinsMedium32"
            >
              Brooklyn
            </Text>
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="text-base text-gray-900_87"
                size="txtPoppinsMedium16"
              >
                Doctor
              </Text>
              <Img
                className="h-[19px] mt-[3px]"
                src="images/img_forward.svg"
                alt="forward"
              />
              <Text
                className="text-base text-gray-900_87"
                size="txtPoppinsMedium16"
              >
                Brooklyn
              </Text>
            </div>
            <Text
              className="mt-[23px] text-base text-gray-900_02"
              size="txtPoppinsSemiBold16Gray90002"
            >
              Id: 2128286
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[1032px] p-[3px] w-[13%] md:w-full">
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
                <Img className="h-[26px]" src="images/img_eye.svg" alt="eye" />
                <Img
                  className="h-6"
                  src="images/img_checkmark_black_900.svg"
                  alt="checkmark_Four"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute md:h-[397px] h-[459px] sm:h-[739px] inset-y-[0] left-[14%] my-auto md:px-5 w-3/5 md:w-full">
          <div className="absolute flex flex-col gap-[31px] items-center justify-start left-[0] top-[1%] w-[26%]">
            <Img
              className="h-72 md:h-auto rounded-[50%] w-72"
              src="images/img_ellipse450.png"
              alt="ellipse450"
            />
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtPoppinsMedium32"
              >
                Brooklyn
              </Text>
              <Text
                className="text-gray-900_87 text-xl"
                size="txtPoppinsMedium20Gray90087"
              >
                ENT Specialist
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-row items-start justify-between left-[2%] w-[41%]">
            <Text
              className="mb-[19px] text-gray-900_87 text-xl"
              size="txtPoppinsMedium20Gray90087"
            >
              Shift Timings: 8.00 - 16.00
            </Text>
            <Text
              className="mt-[25px] text-base text-gray-900_02"
              size="txtPoppinsRegular16"
            >
              Age
            </Text>
          </div>
          <div className="absolute flex flex-col items-start justify-start right-[0] top-[0] w-[61%]">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtPoppinsMedium24"
            >
              Basic Details
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[23px] w-full">
              <Text
                className="text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Title
              </Text>
              <Input
                name="language"
                placeholder="Mr "
                className="leading-[normal] p-0 placeholder:text-gray-400 sm:px-5 text-[13px] text-gray-400 text-left w-full"
                wrapClassName="border border-gray-400 border-solid sm:flex-1 pl-[25px] pr-[35px] py-2.5 rounded sm:w-full"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 w-full">
              <Text
                className="text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                First Name
              </Text>
              <Input
                name="group136"
                placeholder="Brooklyn"
                className="leading-[normal] p-0 placeholder:text-gray-400 sm:px-5 text-[13px] text-gray-400 text-left w-full"
                wrapClassName="border border-gray-400 border-solid sm:flex-1 pb-[9px] pl-[25px] pr-[35px] pt-3 rounded sm:w-full"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 w-full">
              <Text
                className="text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Last Name
              </Text>
              <Input
                name="group133"
                placeholder="K"
                className="leading-[normal] p-0 placeholder:text-gray-400 sm:px-5 text-[13px] text-gray-400 text-left w-full"
                wrapClassName="border border-gray-400 border-solid sm:flex-1 pl-[25px] pr-[35px] py-2.5 rounded sm:w-full"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 w-full">
              <Text
                className="text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Specialization
              </Text>
              <Input
                name="group132"
                placeholder="ENT"
                className="leading-[normal] p-0 placeholder:text-gray-400 sm:px-5 text-[13px] text-gray-400 text-left w-full"
                wrapClassName="border border-gray-400 border-solid sm:flex-1 pl-[25px] pr-[35px] py-2.5 rounded sm:w-full"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 w-full">
              <Text
                className="text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Email
              </Text>
              <Input
                name="email_One"
                placeholder="brooklyns@mail.com"
                className="leading-[normal] p-0 placeholder:text-gray-400 sm:px-5 text-[13px] text-gray-400 text-left w-full"
                wrapClassName="border border-gray-400 border-solid sm:flex-1 pb-[9px] pl-[25px] pr-[35px] pt-3 rounded sm:w-full"
                type="email"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-2.5 w-full">
              <Text
                className="text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Mobile
              </Text>
              <Input
                name="group130"
                placeholder="(603) 555-0123"
                className="leading-[normal] p-0 placeholder:text-gray-400 sm:px-5 text-[13px] text-gray-400 text-left w-full"
                wrapClassName="border border-gray-400 border-solid sm:flex-1 pl-[25px] pr-[35px] py-2.5 rounded sm:w-full"
              ></Input>
            </div>
          </div>
          <div className="absolute bottom-[10%] flex sm:flex-col flex-row sm:gap-10 items-center justify-between right-[0] w-[61%]">
            <Text
              className="text-base text-gray-900_02"
              size="txtPoppinsRegular16"
            >
              Date of Birth
            </Text>
            <Input
              name="group129"
              placeholder="29 - Oct - 1999"
              className="leading-[normal] p-0 placeholder:text-gray-400 sm:px-5 text-[13px] text-gray-400 text-left w-full"
              wrapClassName="border border-gray-400 border-solid pl-[25px] pr-[35px] py-2.5 rounded sm:w-full"
            ></Input>
          </div>
        </div>
        <div className="absolute bottom-[5%] flex md:flex-col flex-row md:gap-10 gap-[83px] items-start justify-center left-[12%] max-w-[1178px] md:px-5 w-full">
          <Text
            className="common-pointer md:mt-0 mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-indigo-900 underline"
            size="txtPoppinsMedium32Indigo900"
            onClick={() => navigate("/gassignedpatients")}
          >
            View Assigned patient list
          </Text>
          <div className="flex md:flex-1 flex-col items-start justify-start w-[58%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <Text
                className="text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Marital Status
              </Text>
              <Input
                name="group127"
                placeholder="Single"
                className="leading-[normal] p-0 placeholder:text-gray-400 sm:px-5 text-[13px] text-gray-400 text-left w-full"
                wrapClassName="border border-gray-400 border-solid sm:flex-1 pb-[9px] pl-[25px] pr-[35px] pt-3 rounded sm:w-full"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-2.5 w-full">
              <Text
                className="sm:mt-0 mt-2.5 text-base text-gray-900_02"
                size="txtPoppinsRegular16"
              >
                Address
              </Text>
              <TextArea
                className="border border-gray-400 border-solid leading-[normal] pb-[30px] pl-[25px] pr-[35px] pt-2.5 sm:px-5 rounded text-[13px] placeholder:text-gray-400 text-gray-400 text-left"
                name="group134"
                placeholder="10, abc, new streert,
Chennai,
Tamil Nadu"
                name="group134"
                placeholder={`10, abc, new streert,
Chennai,
Tamil Nadu`}
              ></TextArea>
            </div>
            <Text
              className="md:ml-[0] ml-[133px] mt-[35px] text-[13px] text-white-A700"
              size="txtPoppinsSemiBold13"
            >
              NEXT STEP
            </Text>
            <div
              className="common-pointer bg-cover bg-no-repeat flex flex-col h-[43px] items-center justify-end md:ml-[0] ml-[277px] mt-[5px] p-[9px] w-[17%] md:w-full"
              style={{ backgroundImage: "url('images/img_group656.svg')" }}
              onClick={() => navigate("/gdoctor")}
            >
              <div className="flex flex-row gap-[9px] items-center justify-center w-[78%] md:w-full">
                <Img
                  className="h-6 md:h-auto object-cover w-6"
                  src="images/img_upwardarrow.png"
                  alt="upwardarrow"
                />
                <Text
                  className="text-[13px] text-white-A700"
                  size="txtPoppinsBold13"
                >
                  BACK
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="absolute border border-gray-400 border-solid bottom-[30%] pl-[25px] pr-[35px] sm:px-5 py-2.5 right-[27%] rounded text-[13px] text-gray-400"
          size="txtPoppinsRegular13"
        >
          22
        </Text>
        <List
          className="absolute bg-indigo-900 flex flex-col gap-[13px] inset-y-[0] left-[1%] my-auto p-[11px] md:px-5 rounded-[25px] w-[7%]"
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
                Patients
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-3.5 w-full">
              <Button className="bg-white-A700 flex h-[70px] items-center justify-center p-[17px] rounded-[50%] w-[70px]">
                <Img
                  className="h-9"
                  src="images/img_car_indigo_900.svg"
                  alt="car"
                />
              </Button>
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
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
              <Text className="text-sm text-white-A700" size="txtPoppinsBold14">
                Profile
              </Text>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default GDoctorDetailsPage;
