import { useCallback } from "react";
import { Formik } from "formik";
import ErrorAlert from "../ErrorAlert";
import * as yup from 'yup';

const SpreadTightenSchema = yup.object().shape({
    spread: yup.number()
      .min(0, '% must be greater than 0!')
      .max(100, '% must be less than 100!')
      .required('Required'),
  });

const SpreadTightenForm = (props: any) => {
  const onSubmit = useCallback(
    (values, actions) => {
      props.update(values.spread);
    },
    [props]
  );
  return (
    <Formik initialValues={{ spread: '' }} validationSchema={SpreadTightenSchema} onSubmit={onSubmit}>
      {(props) => (
        <>
          {props.errors.spread && props.touched.spread && props.values.spread !== '' && (
            <div className="absolute bottom-24 left-0 w-full mx-auto">
              <div className="max-w-2xl mx-auto">
                <ErrorAlert message="Spread must be between 0 and 100" />
              </div>
            </div>
          )}
          <form className="sm:flex" onSubmit={props.handleSubmit}>
            <label htmlFor="spread" className="sr-only">
              Spread
            </label>
            <input
              type="text"
              name="spread"
              id="spread"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.spread}
              className="block w-full text-right py-3 text-xl font-semibold rounded-md placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:flex-1"
              placeholder="Spread (as %)"
            />
            <button
              type="submit"
              className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
            >
              Tighten
            </button>
          </form>
        </>
      )}
    </Formik>
  );
};

const BottomActions = (props: any) => {
  let buttons;

  if (props.tightening) {
    buttons = (
      <button className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
        Pass on Tightening
      </button>
    );
  } else {
    buttons = (
      <>
        <button className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
          Buy
        </button>
        <button className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
          Sell
        </button>
      </>
    );
  }
  return (
    <div className="w-full fixed bottom-12 bg-transparent">
      <div className="max-w-2xl px-4 py-4 mx-auto shadow-2xl bg-white rounded-lg flex items-center justify-between">
        <div>{buttons}</div>
        <div>
          <SpreadTightenForm update={props.update} />
        </div>
      </div>
    </div>
  );
};

export default BottomActions;