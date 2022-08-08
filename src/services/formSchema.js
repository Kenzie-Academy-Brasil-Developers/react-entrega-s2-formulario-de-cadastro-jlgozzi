import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email é obrigatório"),
  password: yup.string().required("senha obrigatória"),
});

export const schemaRegister = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Digite um email"),
  password: yup
    .string()
    .required("Digite uma senha")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  name: yup.string().required("Digite um nome"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas devem ser iguais"),
  bio: yup.string().required("Digite uma Bio"),
  contact: yup
    .string()
    .matches(
      /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
      "Digite um telefone válido"
    )
    .required("asdfasd"),
});
