import "./css/SingleEmployee.css";
const SingleEmployee = () => {
  return (
    <div className="support-page">
      <div className="support-page-container">
        <p>BOSS</p>
      </div>
      <div className="single-page-container1">
        <div className="single-page-container11">
          {" "}
          <img
            style={{
              maxWidth: "170px",
              maxHeight: "170px",
              width: "auto",
              height: "auto",
              margin: "auto",
            }}
            src="/AboutPage/employee.png"
            alt="employee"
          />
        </div>
        <div>
          <p>
            Peggy Lavin, LCSW is the Director of Behavioral Health for
            Accreditation Guru, a national consulting firm dedicated to helping
            social service, behavioral health, and education organizations to
            successfully achieve and maintain national accreditation. Peggy’s
            expertise in accreditation is based on a background of having
            achieved and maintained accreditation for a national behavioral
            health care organization; past manager of The Joint Commission’s
            cadre of behavioral health care accreditation surveyors; and,
            Associate Director of Behavioral Health Care Accreditation. Peggy’s
            clinical expertise is based on being a licensed clinical social
            worker in Illinois and her clinical work in a variety of behavioral
            health care settings and programs. With her appointment to BestNotes
            Clinical Advisory Board, Peggy will share her insights and practical
            expertise on accreditation and clinical practices to help guide
            BestNotes in providing a solid foundation for compliance with
            accreditation requirements and sound clinical practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleEmployee;
