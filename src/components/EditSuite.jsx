import { Field, Formik } from "formik";
// import { useState } from "react";
import DurationsFormatter from "./DurationsFormatter";

// const durationDropdown = DurationsFormatter("dropdown", "rate");
// const durationDropdown = DurationsFormatter("dropdown", "rate");

export default function EditSuite({
  handleUpdate,
  handleSavings,
  isSavings,
  editItem,
}) {
  const isAddMode = !editItem;

  console.log(editItem);
  const formattedTo = !isAddMode
    ? new Date(editItem.duration.To).toISOString().split("T")[0]
    : "";
  const formattedFrom = !isAddMode
    ? new Date(editItem.duration.From).toISOString().split("T")[0]
    : "";

  return (
    <div className="money-column-box my-2">
      <div></div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: isAddMode ? "" : editItem.name,
          amount: isAddMode ? "" : editItem.amount,
          type: isAddMode ? "income" : editItem.type,
          rate: isAddMode ? "DAY" : editItem.rate,
          datefrom: isAddMode ? "" : formattedFrom,
          dateto: isAddMode ? "" : formattedTo,
          withdraw: isAddMode ? "" : editItem.withdraw,
          interest_rate: isAddMode ? "" : editItem.interest_rate,
          from: isAddMode ? "FIX ME" : editItem.from,
          compound: isAddMode ? "DAY" : editItem.compound,
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
          handleUpdate(values, "new");
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
            <span className="dollar">$</span>

            <label>
              amount
              <input
                type="text"
                style={{ paddingLeft: "12px" }}
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
                onChange={(e) => {
                  handleChange(e);
                  handleSavings(e.target.value);
                }}
                onBlur={handleBlur}
                value={values.type}
              >
                <option value={"income"}>Income</option>
                <option value={"expense"}>Expense</option>
                <option value={"saving"}>Savings</option>
              </Field>
              {errors.type && touched.type && errors.type}
            </label>
            <label>
              rate
              <Field
                as="select"
                name="rate"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rate}
              >
                {DurationsFormatter("dropdown", "rate")}
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
            {isSavings === false ? (
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                Submit
              </button>
            ) : null}
            {isSavings === true ? (
              <div>
                <label>
                  interest rate
                  <input
                    type="text"
                    name="interest_rate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.interest_rate}
                  />
                </label>
                <label>
                  compound rate
                  <Field
                    as="select"
                    name="compound"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.compound}
                  >
                    {DurationsFormatter("dropdown", "compound")}
                  </Field>
                </label>
                <label>
                  from:
                  <Field
                    as="select"
                    name="from"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.from}
                  >
                    {/* {durationDropdown} */}
                  </Field>
                </label>
                <label>
                  percent %
                  <input
                    type="text"
                    name="withdraw"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.withdraw}
                  />
                </label>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            ) : (
              <div />
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}
