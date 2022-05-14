import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Search({ setData, setLoading }) {
  /** Variable holds state of API request */
  const [requestError, setRequestError] = useState(false);
  /**API request errors */
  const requestValidation = (status, message) =>
    setRequestError({ status, message });

  const initialValues = { queryTerm: "" };

  const validationSchema = Yup.object().shape({
    queryTerm: Yup.string()
      .required("Search box can't be empty.")
      .min(3, "Please type at least 3 characters."),
  });

  /**
   API requests and stores data and error objects
   handles the loading and reset  form after successeful API requests
*/
  const handleSubmit = (values, actions) => {
    setRequestError(false);
    setLoading(true);
    axios
      .get(
        "https://openlibrary.org/search.json?limit=10&q=" + values.queryTerm,
        { timeout: 5000 }
      ) //
      .then((data) => {
        requestValidation(false, "Success.");
        setLoading(false);
        setData(data.data);
      })
      /** NOTE: Handles error logs for inspection and stores message */
      .catch(function (error) {
        console.log("Request object: ", error.config);
        if (error.response) {
          console.log(
            "Response error: ",
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          console.log("Request error: ", error.request);
        } else {
          console.log("Error: ", error.message);
        }
        requestValidation(true, "Something went wrong. Please try again.");
        setLoading(false);
      });
    actions.resetForm({});
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <Form className="flex p-2 border-2 border-gray-400 border-solid rounded-lg">
            <Field
              type="text"
              name="queryTerm"
              placeholder="Search..."
              className="focus:outline-none"
            />
            <button type="submit" disabled={isSubmitting}>
              <img
                src={require("../resources/images/search_icon.png")}
                alt="search button"
                className="w-5 h-5"
              />
            </button>
          </Form>
          {/* NOTE: Display errors */}
          <ErrorMessage
            name="queryTerm"
            component="p"
            className="pt-2 text-sm text-red-600"
          />
          {/* NOTE: Display Axios API request errors */}
          {requestError.status ? (
            <p className="pt-2 text-sm text-red-600">{requestError.message}</p>
          ) : null}
        </>
      )}
    </Formik>
  );
}
