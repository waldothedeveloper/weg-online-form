import React from "react";

export const Notes = () => {
  return (
    <div className="mt-12">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-50">
              Notas
            </h3>
            <p className="mt-1 text-sm text-gray-100">
              Aqui puede llenar cualquier nota importante sobre el cliente.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="px-4 py-5 bg-gray-50 sm:p-6 rounded-md shadow-lg">
            <div className="sm:col-span-6">
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-700"
              >
                Notas
              </label>
              <div className="mt-1">
                <textarea
                  placeholder="ejemplo: La poliza de Ambetter tiene que ser renovada en 6 meses."
                  id="notes"
                  name="notes"
                  rows={3}
                  className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={""}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Cualquier nota importante sobre el cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
