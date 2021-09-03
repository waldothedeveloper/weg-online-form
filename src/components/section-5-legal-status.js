import React from "react"

export const LegalStatus = () => {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-50">
              Estatus Legal
            </h3>
            <p className="mt-1 text-sm text-gray-100">
              Aqui debe llenar la informacion correspondiente al estatus legal
              del cliente.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="px-4 py-5 bg-gray-50 sm:p-6 rounded-md shadow-lg">
            <div className="grid grid-cols-6 gap-6">
              {/* Status: Residente, Citizen, Huellas */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estatus Legal
                </label>
                <input
                  placeholder="Ciudadano americano"
                  type="text"
                  name="status"
                  id="status"
                  autoComplete="status"
                  className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              {/* NOtes */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="notas"
                  className="block text-sm font-medium text-gray-700"
                >
                  Notas
                </label>
                <div className="mt-1">
                  <textarea
                    id="notas"
                    name="notas"
                    rows={3}
                    className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="ejemplo: 2 meses para el permiso de trabajo."
                    defaultValue={""}
                  />
                </div>
                {/* <p className="mt-2 text-sm text-gray-500">
                  Aqui puede
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
