'use client'
import PrimaryButton, { PrimaryButtonColor } from "@/components/components/atoms/buttons/Primary";
import PrimaryInput from "@/components/components/atoms/inputs/Primary";
import PrimaryLink from "@/components/components/links/Primary";
import { Formik, Form } from "formik";
import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa"; 
import {FaEye, FaEyeSlash} from 'react-icons/fa';
interface FormikInitialValues {
  email: string;
  password: string;
}

const initialValues: FormikInitialValues = {
  email: "",
  password: ""
};

export default function LoginPage() {
    const [showPassword, setPasswordViability] = useState<boolean>(false)
  const onSubmit = (values: FormikInitialValues) => {};

  return (
    <main>
      <section className="flex justify-center items-center flex-col">
        <Image
          width={250}
          height={78}
          src="/hivemindwhite.png"
          alt="HiveMind logo"
        />
        <Formik<FormikInitialValues>
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form className="max-w-md w-full bg-white shadow-md rounded-lg p-6 space-y-3">
            <div className="space-y-4">
                <div className="relative">
                    <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <PrimaryInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    />
                </div>
                <div className="relative">
                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <PrimaryInput
                    suffix={
                        showPassword ? (
                            <FaEye 
                                className="cursor-pointer" 
                                onClick={()=> setPasswordViability((v)=>!v)}
                            />
                        ) :
                        (
                            <FaEyeSlash
                                className="cursor-pointer" 
                                onClick={()=> setPasswordViability((v)=>!v)}
                            />
                        )
                    }
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    />
                </div>
                <div className="space-y-3">
                    <PrimaryButton customColor={PrimaryButtonColor.Primary} type="submit">Log In</PrimaryButton>
                    <div className="flex justify-center">
                        <PrimaryLink>Forgot Password?</PrimaryLink>
                    </div>
                    <div
                        className={'w-full h-[0.5px] bg-gray-300'}
                    >
                    </div>
                    <div className="max-w-[200px] mx-auto">
                        <PrimaryButton customColor={PrimaryButtonColor.Secondary}>
                            <span className="text-sm">
                                Create New Account
                            </span>
                        </PrimaryButton>
                    </div>
                </div>
            </div>
          </Form>
        </Formik>
      </section>
    </main>
  );
}
