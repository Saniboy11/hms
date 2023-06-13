import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const GPatientBilling = React.lazy(() => import("pages/GPatientBilling"));
const GCreditReport = React.lazy(() => import("pages/GCreditReport"));
const GPaymentList = React.lazy(() => import("pages/GPaymentList"));
const GAccountList = React.lazy(() => import("pages/GAccountList"));
const GPurchaseBilling = React.lazy(() => import("pages/GPurchaseBilling"));
const GDebitReport = React.lazy(() => import("pages/GDebitReport"));
const GAddPayment = React.lazy(() => import("pages/GAddPayment"));
const GAddAccount = React.lazy(() => import("pages/GAddAccount"));
const GBillDetails = React.lazy(() => import("pages/GBillDetails"));
const GAddPatientBasicInfoApp = React.lazy(() =>
  import("pages/GAddPatientBasicInfoApp")
);
const GAppointments = React.lazy(() => import("pages/GAppointments"));
const GAddPatientProblemsApp = React.lazy(() =>
  import("pages/GAddPatientProblemsApp")
);
const GDCTScan = React.lazy(() => import("pages/GDCTScan"));
const GDRenalScan = React.lazy(() => import("pages/GDRenalScan"));
const GDXRay = React.lazy(() => import("pages/GDXRay"));
const GDUltrasonicScan = React.lazy(() => import("pages/GDUltrasonicScan"));
const GDBPTest = React.lazy(() => import("pages/GDBPTest"));
const GDBloodTest = React.lazy(() => import("pages/GDBloodTest"));
const GDiagnostic = React.lazy(() => import("pages/GDiagnostic"));
const GEMROne = React.lazy(() => import("pages/GEMROne"));
const GEMRPreview = React.lazy(() => import("pages/GEMRPreview"));
const GEMR = React.lazy(() => import("pages/GEMR"));
const GAssignedPatients = React.lazy(() => import("pages/GAssignedPatients"));
const GAddDoctorBasicInfo = React.lazy(() =>
  import("pages/GAddDoctorBasicInfo")
);
const GDoctorDetails = React.lazy(() => import("pages/GDoctorDetails"));
const GDoctorOne = React.lazy(() => import("pages/GDoctorOne"));
const GDoctor = React.lazy(() => import("pages/GDoctor"));
const GProfile = React.lazy(() => import("pages/GProfile"));
const GAddPatientProblems = React.lazy(() =>
  import("pages/GAddPatientProblems")
);
const GAddPatientBasicInfo = React.lazy(() =>
  import("pages/GAddPatientBasicInfo")
);
const GPatientDetails = React.lazy(() => import("pages/GPatientDetails"));
const GPatients = React.lazy(() => import("pages/GPatients"));
const GPatientsOne = React.lazy(() => import("pages/GPatientsOne"));
const GPatientsTwo = React.lazy(() => import("pages/GPatientsTwo"));
const GHome = React.lazy(() => import("pages/GHome"));
const GLogin = React.lazy(() => import("pages/GLogin"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const GAddPatientAssigndoctor = React.lazy(() =>
  import("pages/GAddPatientAssigndoctor")
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<GAddPatientAssigndoctor />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/glogin" element={<GLogin />} />
          <Route path="/ghome" element={<GHome />} />
          <Route path="/gpatientstwo" element={<GPatientsTwo />} />
          <Route path="/gpatientsone" element={<GPatientsOne />} />
          <Route path="/gpatients" element={<GPatients />} />
          <Route path="/gpatientdetails" element={<GPatientDetails />} />
          <Route
            path="/gaddpatientbasicinfo"
            element={<GAddPatientBasicInfo />}
          />
          <Route
            path="/gaddpatientproblems"
            element={<GAddPatientProblems />}
          />
          <Route path="/gprofile" element={<GProfile />} />
          <Route path="/gdoctor" element={<GDoctor />} />
          <Route path="/gdoctorone" element={<GDoctorOne />} />
          <Route path="/gdoctordetails" element={<GDoctorDetails />} />
          <Route
            path="/gadddoctorbasicinfo"
            element={<GAddDoctorBasicInfo />}
          />
          <Route path="/gassignedpatients" element={<GAssignedPatients />} />
          <Route path="/gemr" element={<GEMR />} />
          <Route path="/gemrpreview" element={<GEMRPreview />} />
          <Route path="/gemrone" element={<GEMROne />} />
          <Route path="/gdiagnostic" element={<GDiagnostic />} />
          <Route path="/gdbloodtest" element={<GDBloodTest />} />
          <Route path="/gdbptest" element={<GDBPTest />} />
          <Route path="/gdultrasonicscan" element={<GDUltrasonicScan />} />
          <Route path="/gdxray" element={<GDXRay />} />
          <Route path="/gdrenalscan" element={<GDRenalScan />} />
          <Route path="/gdctscan" element={<GDCTScan />} />
          <Route
            path="/gaddpatientproblemsapp"
            element={<GAddPatientProblemsApp />}
          />
          <Route path="/gappointments" element={<GAppointments />} />
          <Route
            path="/gaddpatientbasicinfoapp"
            element={<GAddPatientBasicInfoApp />}
          />
          <Route path="/gbilldetails" element={<GBillDetails />} />
          <Route path="/gaddaccount" element={<GAddAccount />} />
          <Route path="/gaddpayment" element={<GAddPayment />} />
          <Route path="/gdebitreport" element={<GDebitReport />} />
          <Route path="/gpurchasebilling" element={<GPurchaseBilling />} />
          <Route path="/gaccountlist" element={<GAccountList />} />
          <Route path="/gpaymentlist" element={<GPaymentList />} />
          <Route path="/gcreditreport" element={<GCreditReport />} />
          <Route path="/gpatientbilling" element={<GPatientBilling />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
