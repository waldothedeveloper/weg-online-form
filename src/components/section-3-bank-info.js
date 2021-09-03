import React from "react"
import PropTypes from "prop-types"

export const BankInfo = ({ handleChange, values }) => {
  return (
    <div className="mt-12">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-50">
              Informacion bancaria
            </h3>
            <p className="mt-1 text-sm text-gray-100">
              Aqui debe llenar la informacion bancaria relacionada con el
              cliente.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="px-4 py-5 bg-gray-50 sm:p-6 rounded-md shadow-lg">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Metodos de pago
              </h2>

              {/* BANK INFORMATION */}
              <div className="mt-4">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="cuenta_de_banco"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cuenta de Banco
                    </label>
                    <input
                      placeholder="Chase"
                      onChange={handleChange}
                      value={values.cuenta_de_banco || ""}
                      type="text"
                      name="cuenta_de_banco"
                      id="cuenta_de_banco"
                      className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="numero_de_ruta"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Numero de Ruta
                    </label>
                    <input
                      placeholder="3530111333300000"
                      onChange={handleChange}
                      value={values.numero_de_ruta || ""}
                      type="number"
                      name="numero_de_ruta"
                      id="numero_de_ruta"
                      className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  {/* Account number */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="numero_de_cuenta"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Numero de Cuenta
                    </label>
                    <input
                      placeholder="091000019"
                      onChange={handleChange}
                      value={values.numero_de_cuenta || ""}
                      type="number"
                      name="numero_de_cuenta"
                      id="numero_de_cuenta"
                      className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="numero_de_cuenta_2"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Numero de Cuenta (debe coincidir)
                    </label>
                    <input
                      placeholder="091000019"
                      onChange={handleChange}
                      value={values.numero_de_cuenta_2 || ""}
                      type="number"
                      name="numero_de_cuenta_2"
                      id="numero_de_cuenta_2"
                      className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              {/* to select type of card */}
              <fieldset className="mt-12">
                <legend className="sr-only">Payment type</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div className="flex items-center">
                    <input
                      onChange={handleChange}
                      name="metodo_de_pago"
                      checked={values.metodo_de_pago === "Credito" || ""}
                      value="Credito"
                      id="Credito"
                      type="radio"
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                    />
                    <label
                      htmlFor="Credito"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Credito
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      onChange={handleChange}
                      name="metodo_de_pago"
                      checked={values.metodo_de_pago === "Debito" || ""}
                      value="Debito"
                      id="Debito"
                      type="radio"
                      className="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                    />
                    <label
                      htmlFor="Debito"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Debito
                    </label>
                  </div>
                </div>
              </fieldset>
              {/* credit/debit card details */}
              {/* credit/debit card details */}
              <div className="mt-6 grid grid-cols-6 gap-y-6 gap-x-4">
                <div className="col-span-6 sm:col-span-3">
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-700">
                      Detalles de la tarjeta
                    </legend>
                    <div className="mt-1 bg-white rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="card-number" className="sr-only">
                          Card number
                        </label>
                        <input
                          onChange={handleChange}
                          value={values.numero_de_tarjeta || ""}
                          name="numero_de_tarjeta"
                          type="text"
                          id="card-number"
                          className="focus:ring-orange-500 focus:border-orange-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                          placeholder="4242-4242-4242"
                        />
                      </div>
                      {/* titular de la tarjeta */}
                      <div>
                        <label htmlFor="card-number" className="sr-only">
                          Cardholder full name
                        </label>
                        <input
                          onChange={handleChange}
                          value={values.nombre_del_titular || ""}
                          name="nombre_del_titular"
                          placeholder="William Gola "
                          type="text"
                          id="nombre_del_titular"
                          autoComplete="cc-name"
                          className="focus:ring-orange-500 focus:border-orange-500 relative block w-full bg-transparent focus:z-10 sm:text-sm border-gray-300"
                        />
                      </div>
                      {/* fecha de expiracion y cvc */}
                      <div className="flex -space-x-px">
                        <div className="w-1/2 flex-1 min-w-0">
                          <label
                            htmlFor="card-expiration-date"
                            className="sr-only"
                          >
                            Expiration date
                          </label>
                          <input
                            type="text"
                            onChange={handleChange}
                            value={values.fecha_de_expiracion || ""}
                            name="fecha_de_expiracion"
                            id="card-expiration-date"
                            className="focus:ring-orange-500 focus:border-orange-500 relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                            placeholder="MM / YY"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <label htmlFor="cvc" className="sr-only">
                            CVC
                          </label>
                          <input
                            onChange={handleChange}
                            value={values.cvc || ""}
                            type="number"
                            id="cvc"
                            className="focus:ring-orange-500 focus:border-orange-500 relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

BankInfo.propTypes = {
  handleChange: PropTypes.func,
  values: PropTypes.object,
}
