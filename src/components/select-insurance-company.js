import React, { useState } from "react"
import { Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import PropTypes from "prop-types"

const companias = [
  { id: 1, name: "Indigo Shield" },
  { id: 2, name: "Obama Care" },
  { id: 3, name: "Cigna" },
  { id: 4, name: "United Health Care" },
  { id: 5, name: "Ambetter" },
  { id: 6, name: "Indigo Cross" },
  { id: 7, name: "Indigo Shield" },
  { id: 8, name: "Molina HealthCare" },
  { id: 9, name: "Oscar" },
  { id: 10, name: "Humana" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const SelectInsuranceCompany = ({ value, handleSelectCompany }) => {
  const [company, setCompany] = useState(value || "Seleccione una compania")

  //
  return (
    <Listbox
      value={company}
      onChange={selectedCompany => {
        setCompany(selectedCompany)
        handleSelectCompany(selectedCompany)
      }}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            Compañia de Seguros
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm">
              <span className="block truncate">{company}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {companias.map(company => (
                  <Listbox.Option
                    key={company.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-orange-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-8 pr-4"
                      )
                    }
                    value={company.name}
                  >
                    {({ value, active }) => (
                      <>
                        <span
                          className={classNames(
                            value ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {company.name}
                        </span>

                        {value ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-orange-600",
                              "absolute inset-y-0 left-0 flex items-center pl-1.5"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

SelectInsuranceCompany.propTypes = {
  handleSelectCompany: PropTypes.func,
  value: PropTypes.string,
}
