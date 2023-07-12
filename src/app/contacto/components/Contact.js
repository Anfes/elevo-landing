"use client";

import CustomTextField from "@components/CustomTextField/CustomTextField";
import { Autocomplete, Box, Button, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import ctr from "@components/countries/Countries";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import TodayRoundedIcon from "@mui/icons-material/TodayRounded";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  buttonSend: {
    background: "#500CDD",
    borderRadius: "6px",
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    width: "100%",
    "&:hover": {
      background: "#651DFF",
      textDecoration: "none",
    },
    "&:focus": {
      background: "#651DFF",
      textDecoration: "none",
    },
    "&:disabled": {
      background: "white",
      textDecoration: "none",
      color: "#CDB5FF",
      border: "1px solid #CDB5FF",
    },
  },
}));

const defaultValues = {
  name: "",
  email: "",
  indicativo: { code: "CO", label: " (+57) Colombia", phone: "57" },
  phone: "",
  message: "",
  tipo: null,
};

const optionTipo = [
  { value: 1, label: "Paciente" },
  { value: 2, label: "Fisioterapeuta" },
  { value: 3, label: "Masoterapeuta" },
];

const schema = yup.object().shape({
  tipo: yup.object().nullable().required("Tipo requerido"),
  name: yup.string().required("El nombre completo es requerido"),
  email: yup
    .string()
    .email("Debe introducir un correo electrónico válido")
    .required("El email es requerido"),
  indicativo: yup.object().nullable().required("indicativo requerido"),
  phone: yup
    .number()
    .typeError("debe especificar un número")
    .required("El celular es requerido"),
  message: yup.string().required("Cuéntanos tu duda es requerido"),
});

const Contact = () => {
  const classes = useStyles();
  const { control, formState, handleSubmit, setError, setValue, reset, watch } =
    useForm({
      mode: "onChange",
      defaultValues,
      resolver: yupResolver(schema),
    });
  const { isValid, dirtyFields, errors } = formState;
  return (
    <div className="bg-white">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className="mt-20 py-12 grid grid-cols-2 gap-4 container sm:mx-auto xl:px-36 lg:px-36 px-8 min-w-full">
        <div className="flex flex-col justify-center md:col-span-1 col-span-2">
          <Typography
            variant="h2"
            className="font-bold text-4xl text-[#2D3145] md:text-left text-center"
          >
            ¿Aún tienes <span className="text-[#3F34BB]">preguntas</span> sin
            responder?
          </Typography>
          <Typography
            variant="body1"
            className="text-[#535978] mt-2 md:text-left text-center "
          >
            No te preocupes, nuestro equipo estará siempre disponible para
            responder todas tus preguntas
          </Typography>
        </div>
        <div className="md:col-span-1 col-span-2 bg-white border-solid border-[1px 1px 0px 1px] border-[#E0E5FC] shadow-[0px 4px 40px 8px rgba(197, 205, 247, 0.2);] rounded-[40px] py-16 px-6">
          <Typography variant="h3" className="font-bold text-2xl">
            Ínspirate y cuéntanos tus dudas
          </Typography>
          <Typography
            variant="body1"
            className="text-[#535978] mt-2 mb-4 text-left"
          >
            Déjanos tus datos para poder contactarte
          </Typography>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3">
              <Controller
                name="tipo"
                control={control}
                render={({ field: { onChange, value, onBlur, ref } }) => (
                  <Autocomplete
                    disablePortal
                    options={optionTipo}
                    getOptionLabel={(option) => `${option.label}`}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    value={value}
                    onChange={(event, newValue) => {
                      onChange(newValue);
                    }}
                    noOptionsText={"Sin resultados"}
                    renderInput={(params) => (
                      <CustomTextField
                        {...params}
                        label="Soy"
                        variant="outlined"
                        error={!!errors.tipo}
                        helperText={errors?.tipo?.message}
                        required
                        onBlur={onBlur}
                        inputRef={ref}
                      />
                    )}
                  />
                )}
              />
            </div>
            <div className="col-span-3">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    label="Nombre completo"
                    error={!!errors.con_nombre_completo}
                    helperText={errors?.con_nombre_completo?.message}
                    required
                  />
                )}
              />
            </div>
            <div className="col-span-3">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    type="email"
                    label="Correo electrónico"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    required
                  />
                )}
              />
            </div>
            <div className="sm:col-span-1 col-span-3">
              <Controller
                name="indicativo"
                control={control}
                render={({ field: { onChange, value, onBlur, ref } }) => (
                  <Autocomplete
                    disablePortal
                    options={ctr}
                    getOptionLabel={(option) => `${option.label}`}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value.id
                    }
                    value={value}
                    onChange={(event, newValue) => {
                      onChange(newValue);
                    }}
                    noOptionsText={"Sin resultados"}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <Image
                          loading="lazy"
                          width={20}
                          height={20}
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          alt=""
                        />
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <CustomTextField
                        {...params}
                        variant="outlined"
                        style={{ minWidth: 0 }}
                        error={!!errors.indicativo}
                        required
                        onBlur={onBlur}
                        inputRef={ref}
                      />
                    )}
                  />
                )}
              />
            </div>
            <div className="sm:col-span-2 col-span-3">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    label="Celular"
                    error={!!errors.phone}
                    helperText={errors?.phone?.message}
                    required
                  />
                )}
              />
            </div>
            <div className="col-span-3">
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    {...field}
                    label="Cuéntanos tu duda"
                    multiline
                    rows={3}
                    error={!!errors.message}
                    helperText={errors?.message?.message}
                    required
                  />
                )}
              />
              <div />
            </div>
            <div className="col-span-3">
              <Button
                className={classes.buttonSend}
                variant="contained"
                color="primary"
                disabled={!isValid || !dirtyFields}
                onClick={handleSubmit((data) => {
                  console.log(data);
                  reset();
                })}
              >
                Enviar información
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Link href="/reserva-cita" className=" fixed right-10 bottom-144 z-50">
        <div
          className="flex justify-center items-center py-4 px-4"
          style={{
            backgroundColor: "#651DFF",
            boxShadow: "0px 4px 8px rgba(79, 12, 221, 0.3)",
            borderRadius: 64,
          }}
        >
          <Typography className={"text-18 font-semibold mr-2 text-white"}>
            Reservar servicio
          </Typography>
          <TodayRoundedIcon className={"text-32 text-white"} />
        </div>
      </Link>
    </div>
  );
};

export default Contact;
