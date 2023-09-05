import { Formik } from "formik";
import { useState } from "react";

// THIS IS THE TEMP PLACEHOLDER FOR THE MAIN DATES AT THE TOP OF THE PAGE.

export default function EditSuite() {
  const [isIndefinite, setIndefinite] = useState(false);

  // I INCLUDED THE INDEFINITE BOX FUNCTIONALITY TOO
  const checkHandler = (setFieldValue) => {
    setIndefinite(!isIndefinite);
    !isIndefinite
      ? setFieldValue("dateto", "2999-01-01")
      : setFieldValue("dateto", "");
  };
  return (
    <div className="span">
      <Formik
        initialValues={{
          datefrom: "",
          dateto: "",
        }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.name) {
        //     errors.name = "Required";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <label className="indefinite">Start Date: </label>
            <label>
              from:
              <input
                type="date"
                name="datefrom"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.datefrom}
              />
            </label>
            {/* {errors.datefrom && touched.datefrom && errors.datefrom} */}
            {isIndefinite ? null : (
              <>
                <label>
                  to:
                  <input
                    type="date"
                    name="dateto"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateto}
                  />
                </label>
                {/* {errors.dateto && touched.dateto && errors.dateto} */}
              </>
            )}

            <input
              className="checkbox"
              type="checkbox"
              onChange={() => {
                checkHandler(setFieldValue);
              }}
            />
            <label className="indefinite">indefinite</label>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
