import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ArrowRight from '../../assets/ArrowRight';

export default function ContactsForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = setFieldValue => {
    setIsChecked(!isChecked);
    setFieldValue('checked', !isChecked);
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    setIsChecked(false);
  };

  let validateSchema = Yup.object({
    userName: Yup.string()
      .min(3, 'Мінімально 3 символи')
      .max(50, 'Максимально 50 символів')
      .required("Обов'язкове поле"),
    email: Yup.string()
      .email('Неправильний email')
      .max(50, 'Максимально 50 символів')
      .required("Обов'язкове поле"),
    number: Yup.string()
      .matches(/^\+?\d+$/, 'Введіть номер формату 0961233456')
      .min(10, 'Введіть номер формату 0961233456')
      .max(13, 'Введіть номер формату 0961233456')
      .required("Обов'язкове поле"),
    topic: Yup.string()
      .min(3, 'Мінімально 3 символи')
      .max(50, 'Максимально 50 символів')
      .required("Обов'язкове поле"),
    message: Yup.string()
      .min(3, 'Мінімально 3 символи')
      .max(250, 'Максимально 250 символів')
      .required("Обов'язкове поле"),
    checked: Yup.boolean()
      .oneOf([true], 'Прийміть умови політики конфіденційності')
      .required("Обов'язкове поле"),
  });

  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        number: '',
        topic: '',
        message: '',
        checked: isChecked,
      }}
      onSubmit={handleSubmit}
      validationSchema={validateSchema}
    >
      {({ values, handleChange, handleBlur, setFieldValue }) => (
        <Form className="md:absolute z-10 md:-top-12 left-16 lg:left-24 lg:-top-16 w-full py-8 px-4 order-2 md:order-1 bg-wht rounded-[32px] font-inter md:min-w-[363px] md:w-[363px] md:shadow-abt  md:py-10 md:px-6 lg:w-[535px] lg:py-[56px] lg:px-10">
          <div className="relative mb-3">
            <label htmlFor="userName" className="flex items-center relative">
              {!values.userName && (
                <span className="absolute top-3 left-[120px] font-medium text-xs text-[#f00]">
                  *
                </span>
              )}
              <Field
                className="w-full py-3 px-5 border border-solid border-[#d9d9d9] rounded-[4px] font-medium text-xs -tracking-[0.01em]  text-grl placeholder:text-form"
                placeholder="Ім'я та Прізвище"
                name="userName"
                id="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
              />
            </label>
            <ErrorMessage
              className="text-[#f00] text-[10px]"
              name="userName"
              component="span"
            />
          </div>
          <div className="lg:flex gap-6 ">
            <div className="relative mb-3 flex-1">
              <label htmlFor="email" className="flex items-center relative">
                {!values.email && (
                  <span className="absolute top-3 left-[55px] font-medium text-xs text-[#f00]">
                    *
                  </span>
                )}
                <Field
                  className="w-full py-3 px-5 border border-solid border-[#d9d9d9] rounded-[4px] font-medium text-xs -tracking-[0.01em]  text-grl placeholder:text-form"
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </label>
              <ErrorMessage
                className="text-[#f00] text-[10px]"
                name="email"
                component="span"
              />
            </div>

            <div className="relative mb-6 flex-1">
              <label htmlFor="number" className="flex items-center relative">
                {!values.number && (
                  <span className="absolute top-3 left-[123px] font-medium text-xs text-[#f00]">
                    *
                  </span>
                )}
                <Field
                  className="w-full py-3 px-5 border border-solid border-[#d9d9d9] rounded-[4px] font-medium text-xs -tracking-[0.01em] text-grl placeholder:text-form"
                  placeholder="Номер телефону"
                  name="number"
                  id="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.number}
                />
              </label>
              <ErrorMessage
                className="text-[#f00] text-[10px]"
                name="number"
                component="span"
              />
            </div>
          </div>

          <div className="relative mb-3">
            <label htmlFor="topic" className="flex items-center relative">
              {!values.topic && (
                <span className="absolute top-3 left-[54px] font-medium text-xs text-[#f00]">
                  *
                </span>
              )}
              <Field
                className="w-full py-3 px-5 border border-solid border-[#d9d9d9] rounded-[4px] font-medium text-xs -tracking-[0.01em] text-grl placeholder:text-form"
                placeholder="Тема"
                name="topic"
                id="topic"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.topic}
              />
            </label>
            <ErrorMessage
              className="text-[#f00] text-[10px]"
              name="topic"
              component="span"
            />
          </div>

          <div className="relative mb-3">
            <label htmlFor="message" className="flex items-center relative">
              {!values.message && (
                <span className="absolute top-3 left-[118px] font-medium text-xs text-[#f00]">
                  *
                </span>
              )}
              <Field
                className="max-h-[128px] min-h-[128px] w-full py-3 px-5 border border-solid border-[#d9d9d9] rounded-[4px] font-medium text-xs -tracking-[0.01em] text-grl placeholder:text-form resize-none"
                as="textarea"
                placeholder="Повідомлення..."
                name="message"
                id="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
            </label>
            <ErrorMessage
              className="text-[#f00] text-[10px]"
              name="message"
              component="span"
            />
          </div>

          <div className="relative mb-3">
            <label className="flex flex-row gap-3">
              {!values.checked && (
                <span className="absolute top-0 left-[295px] font-medium text-xs text-[#f00]">
                  *
                </span>
              )}
              <Field
                className="visually-hidden checked:bg-orn text-grl placeholder:text-form"
                type="checkbox"
                name="checked"
                value="policyTrue"
                onChange={() => handleCheckboxChange(setFieldValue)}
                checked={isChecked}
              />
              <span
                className={`inline-flex border border-solid border-[#d9d9d9] w-4 h-4 rounded-[2px]  ${
                  isChecked ? 'bg-orn' : ''
                }`}
              ></span>
              <div className="flex gap-[4px]">
                <p className="font-medium text-xs -tracking-[0.01em] text-form">
                  Я погоджуюсь з
                </p>
                <a
                  href="#"
                  className="font-medium text-xs -tracking-[0.01em] text-orn underline  text-decoration-skip-ink-none"
                >
                  політикою конфіденційності
                </a>
              </div>
            </label>

            <ErrorMessage
              className="block mt-2 text-[#f00] text-[10px]"
              name="checked"
              component="span"
            />
          </div>

          <button
            className="flex items-center justify-center gap-[10px] w-full border solid border-wht-20 text-wht bg-orn py-2 px-4 rounded-[16px] font-bold text-base uppercase lg:w-[180px]"
            type="submit"
          >
            Відправити
            <ArrowRight />
          </button>
        </Form>
      )}
    </Formik>
  );
}
