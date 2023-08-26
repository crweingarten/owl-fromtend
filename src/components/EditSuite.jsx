import { Field, Formik } from "formik";
import DurationsFormatter from "./DurationsFormatter";

const durationDropdown = DurationsFormatter("dropdownMenu");

export default function EditSuite() {
  console.log(durationDropdown);
  return (
    <div className="money-column-box my-2">
      <Formik
        initialValues={{
          name: "",
          amount: "",
          type: "",
          rate: "",
          dateto: "",
          datefrom: "",
          indefinite: "",
        }}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.name) {
        //     errors.name = "Required";
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <label>
              name
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </label>
            {errors.name && touched.name && errors.name}
            <label>
              amount
              <input
                type="text"
                name="amount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.amount}
              />
            </label>
            {errors.amount && touched.amount && errors.amount}
            <label>
              type
              <Field
                as="select"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.type}
              >
                <option>Income</option>
                <option>Expense</option>
                <option>Savings</option>
              </Field>
              {errors.type && touched.type && errors.type}
            </label>
            <label>
              rate
              <Field
                as="select"
                name="type"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rate}
              >
                {durationDropdown}
              </Field>
            </label>
            {errors.rate && touched.rate && errors.rate}
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
            {errors.datefrom && touched.datefrom && errors.datefrom}
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
            {errors.dateto && touched.dateto && errors.dateto}

            <input
              className="checkbox"
              type="checkbox"
              name="indefinite"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.indefinite}
            />
            <label className="indefinite">indefinite</label>
            {errors.indefinite && touched.indefinite && errors.indefinite}
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
