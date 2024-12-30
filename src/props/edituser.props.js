export const fields = [
  {
    type: "text",
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    required: true,
  },
  {
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    type: "text",
    name: "address",
    label: "Address",
    placeholder: "Enter your address",
    required: true,
  },
  {
    type: "text",
    name: "phone",
    label: "Phone",
    placeholder: "Enter your phone number",
    required: true,
  },
  {
    type: "date",
    name: "dob",
    label: "Date of Birth",
    required: true,
  },
  {
    type: "select",
    name: "gender",
    label: "Gender",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "pnts", label: "Prefer not to Say" },
    ],
    required: true,
  },
  {
    type: "text",
    name: "country",
    label: "Country",
    placeholder: "Enter your country",
    required: true,
  },
  {
    type: "text",
    name: "postalCode",
    label: "Postal Code",
    placeholder: "Enter your postal code",
    required: false,
  },
];
export const buttons = [
  {
    type: "submit",
    label: "Save Changes",
    style: "primary",
  },
];
