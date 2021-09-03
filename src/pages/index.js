import React, { useState, useEffect } from "react";
import { Divider } from "../components/divider";
import { InsuranceInfo } from "../components/section-1-insurance-info";
import { UserAccount } from "../components/section-2-user-account";
import { BankInfo } from "../components/section-3-bank-info";
import { PersonalInfo } from "../components/section-4-personal-info";
import { LegalStatus } from "../components/section-5-legal-status";
import { WorkInfo } from "../components/section-6-work-info";
import { Relatives } from "../components/section-7-relatives";
import { Notes } from "../components/section-8-notes";

export default function AirtableUI() {
  const [values, setValues] = useState({});
  console.log("values: ", values);
  const [serverResponse, setServerResponse] = React.useState(``);
  console.log("serverResponse: ", serverResponse);

  // Listen to form changes and save them.
  const handleChange = (e) => {
    if (e) e.persist();
    const name = e.target.name;
    const value = e.target.value;

    setValues((oldValues) => ({
      ...oldValues,
      [name]: value,
    }));

    setServerResponse(``);
  };

  const handleSelectCompany = (selectedOne) => {
    setValues((oldValues) => ({
      ...oldValues,
      companias_de_seguro: selectedOne,
    }));
  };

  // When the form is submitted, send the form values
  // to our function for processing.
  async function onSubmit(event) {
    event.preventDefault();
    const response = await window
      .fetch(`/api/airtable`, {
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      })
      .then((res) => res.json());
    setServerResponse(response);
  }

  // this clean the values after form is submitted
  useEffect(() => {
    if (serverResponse?.message === "Successfully submitted message") {
      //
      setValues({});
    }
    return () => {
      setServerResponse(``);
    };
  }, [serverResponse]);

  //
  return (
    <div className="bg-gradient-to-b from-blueGray-900 to-warmGray-600 py-12 px-2 md:px-0">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={onSubmit} method="POST" action="/api/airtable">
          <InsuranceInfo
            handleChange={handleChange}
            values={values}
            handleSelectCompany={handleSelectCompany}
          />
          <Divider />
          <UserAccount handleChange={handleChange} values={values} />
          <Divider />
          <BankInfo handleChange={handleChange} values={values} />
          <Divider />
          <PersonalInfo />
          <Divider />
          <LegalStatus />
          <Divider />
          <WorkInfo />
          <Divider />
          {/* <Relatives /> */}
          {/* <Divider /> */}
          <Notes />

          <div className="pt-12 px-2">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:text-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-700 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
