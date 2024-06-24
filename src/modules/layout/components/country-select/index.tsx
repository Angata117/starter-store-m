import { Listbox, Transition } from "@headlessui/react";
import ReactCountryFlag from "react-country-flag";
import { Fragment, useEffect, useMemo, useState } from "react";
import { updateRegion } from "app/actions";

type CountryOption = {
  country: string;
  label: string;
};

type CountrySelectProps = {
  regions: Region[];
  toggleState: {
    close: () => void;
    state: boolean;
  };
};

const CountrySelect = ({ toggleState, regions }: CountrySelectProps) => {
  const [currentCountry, setCurrentCountry] = useState<string>("");

  const options = useMemo(() => regions.map(region => ({
    country: region.countries.iso_2,
    label: region.countries.display_name
  })), [regions]);

  useEffect(() => {
    setCurrentCountry(options[0]?.country);
  }, [options]);

  const handleChange = (value: string) => {
    updateRegion(value);
    setCurrentCountry(value);
    toggleState.close();
  };

  return (
    <div>
      <Listbox value={currentCountry} onChange={handleChange}>
        <Listbox.Button className="py-1 w-full">
          {currentCountry && (
            <div className="txt-compact-small flex items-center gap-x-2">
              <ReactCountryFlag
                svg
                style={{ width: "16px", height: "16px" }}
                countryCode={currentCountry}
              />
              {options.find(o => o.country === currentCountry)?.label}
            </div>
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          show={toggleState.state}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                value={option.country}
                className={({ active }) =>
                  `cursor-pointer select-none relative py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`
                }
              >
                {({ selected, active }) => (
                  <>
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.label}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-amber-600' : 'text-amber-600'}`}
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
      </Listbox>
    </div>
  );
};

export default CountrySelect;
