import React from "react";

export const RelativesInfo = () => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-6 gap-6">
        {/* nombre y apellidos del relativo */}
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="relative_firstname"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            placeholder="Mariana"
            type="text"
            name="relative_firstname"
            id="relative-name"
            autoComplete="given-name"
            className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="relative_lastname"
            className="block text-sm font-medium text-gray-700"
          >
            Apellidos
          </label>
          <input
            placeholder="Grajales"
            type="text"
            name="relative_lastname"
            id="relative-lastname"
            autoComplete="family-name"
            className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        {/* cobertura */}
        <div className="col-span-6 sm:col-span-2">
          <label
            htmlFor="work-type"
            className="block text-sm font-medium text-gray-700"
          >
            Cobertura
          </label>
          <select
            id="work-type"
            name="work-type"
            autoComplete="work-type"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          >
            <option>Seleccione una opcion</option>
            <option>SI</option>
            <option>NO</option>
          </select>
        </div>

        {/* fecha de nacimiento */}
        <div className="col-span-6 sm:col-span-2">
          <label
            htmlFor="fecha-de-nacimiento"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha de nacimiento
          </label>
          <input
            // onChange={handleChange}
            // value={values.fecha_de_inscripcion || ""}
            type="date"
            name="fecha_de_inscripcion"
            id="relative_birthdate"
            className="mt-1 focus:ring-orange-500 focus:border-orange-500  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        {/* Edad */}
        <div className="col-span-6 sm:col-span-2">
          <label
            htmlFor="edad"
            className="block text-sm font-medium text-gray-700"
          >
            Edad
          </label>
          <input
            placeholder="35 años"
            type="text"
            name="edad"
            id="edad"
            autoComplete="age"
            className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        {/* Sexo de la persona */}
        <div className="col-span-6 sm:col-span-2">
          <label
            htmlFor="relative_gender"
            className="block text-sm font-medium text-gray-700"
          >
            Sexo
          </label>
          <select
            id="work-type"
            name="work-type"
            autoComplete="work-type"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          >
            <option>Seleccione una opcion</option>
            <option>Femenino</option>
            <option>Masculino</option>
            <option>Gay</option>
            <option>Bisexual</option>
            <option>Prefiero no decir</option>
          </select>
        </div>
        {/* numero de seguro social */}
        <div className="col-span-6 sm:col-span-2">
          <label
            htmlFor="ssn"
            className="block text-sm font-medium text-gray-700"
          >
            Numero de Seguro Social
          </label>
          <input
            placeholder="737-79-5555"
            type="number"
            name="ssn"
            id="ssn"
            autoComplete="ssn"
            className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        {/* relacion de la persona con el principal : wife, kids, dependant, etc. */}
        {/* NOtes */}
        <div className="col-span-6 sm:col-span-2">
          <label
            htmlFor="notas"
            className="block text-sm font-medium text-gray-700"
          >
            Relacion
          </label>
          <div className="mt-1">
            <input
              placeholder="Tio, sobrino, esposa"
              type="text"
              name="relative_relationship"
              id="relative_relationship"
              autoComplete="relative_relationship"
              className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
