import React from "react"
import PropTypes from "prop-types"

//
export const UserAccount = ({ handleChange, values }) => {
  //
  return (
    <div className="mt-12">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-50">
              Cuenta del cliente
            </h3>
            <p className="mt-1 text-sm text-gray-100">
              Aqui debe llenar el email y la contraseña del usuario si ambos
              fueron creados.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="px-4 py-5 bg-gray-50 sm:p-6 rounded-md shadow-lg">
            {/* email */}
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  placeholder="weginsurance@gmail.com"
                  value={values.email || ""}
                  onChange={handleChange}
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1 text-gray-800 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              {/* password */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <input
                  value={values.password || ""}
                  onChange={handleChange}
                  placeholder="tu contraseña favorita ***"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="mt-1 text-gray-800 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

UserAccount.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
}
