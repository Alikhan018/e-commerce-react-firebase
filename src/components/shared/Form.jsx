import React from "react";

export default function DynamicForm({
  fields = [],
  buttons = [],
  formName = "",
  onSubmit = () => {},
}) {
  const [formData, setFormData] = React.useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <form method="post" onSubmit={handleSubmit}>
      <h2>{formName}</h2>
      <div className="inner-f">
        {fields.map((field, index) => (
          <div key={index} className="form-group">
            <label htmlFor={field.id || field.name}>
              <b>{field.label}</b>
            </label>

            {field.type !== "select" ? (
              <input
                type={field.type}
                id={field.id || field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                {...(field.additionalProps || {})}
              />
            ) : (
              <select
                id={field.id || field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                required={field.required}
                {...(field.additionalProps || {})}
              >
                {field.options?.map((option, optionIndex) => (
                  <option key={optionIndex} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}

        <div className="button-group">
          {buttons.map((button, index) => (
            <button
              key={index}
              type={button.type || "button"}
              className={button.className}
              onClick={button.onClick || (() => {})}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}
